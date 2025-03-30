'use client';

import {useEffect, useState} from 'react';
import {useRouter} from 'next/navigation';
import Cookies from 'js-cookie';
import {useForm} from 'react-hook-form';
import {setProject} from '@/databse/databse';
import toast from 'react-hot-toast';

export default function Dashboard () {
  const router = useRouter ();
  const {register, handleSubmit, reset} = useForm ();
  const [isAuthenticated, setIsAuthenticated] = useState (false);
  const [hasCheckedAuth, setHasCheckedAuth] = useState (false);

  useEffect (
    () => {
      if (typeof window !== 'undefined') {
        const token = Cookies.get ('auth-token');
        setHasCheckedAuth (true);
        if (!token) {
          router.push ('/authentication');
        } else {
          setIsAuthenticated (true);
        }
      }
    },
    [router]
  );

  const onSubmit = async data => {
    // Trim all string fields before processing
    const trimmedData = {
      name: data.name?.trim(),
      description: data.description?.trim(),
      role: data.role?.trim(),
      keyFeatures: data.keyFeatures
        .split(',')
        .map(feature => feature.trim())
        .filter(feature => feature), // Also removes empty strings
      technologies: data.technologies
        .split(',')
        .map(tech => tech.trim())
        .filter(tech => tech), // Removes empty strings
      frontend: data.frontend?.trim(),
      backend: data.backend?.trim(),
      liveDemo: data.liveDemo?.trim(),
      thumbnail: data.thumbnail?.trim(),
      year: data.year,
    };

    const newProject = {
      ...trimmedData,
      year: Number(trimmedData.year) // Ensure year is a number
    };

    console.log(newProject);

    const res = await setProject(newProject);
    if (res) {
      toast.success('Project added successfully!', {
        duration: 3000,
      });
      reset();
    } else {
      toast.error('Sorry! Something went wrong.', {
        duration: 3000,
      });
    }
  };

  if (!hasCheckedAuth) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto mt-20 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-[#9810FA]">Project Dashboard</h1>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-base-100 shadow-lg p-6 rounded-lg border"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            {...register('name')}
            placeholder="Project Name"
            className="input input-bordered w-full"
            required
          />
          <input
            {...register('role')}
            placeholder="Your Role"
            className="input input-bordered w-full"
            required
          />
          <textarea
            {...register('description')}
            placeholder="Description"
            className="textarea textarea-bordered w-full"
            required
          />
          <textarea
            {...register('keyFeatures')}
            placeholder="Key Features (comma-separated)"
            className="textarea textarea-bordered w-full"
            required
          />
          <input
            {...register('technologies')}
            placeholder="Technologies (comma-separated)"
            className="input input-bordered w-full"
            required
          />
          <input
            {...register('frontend')}
            placeholder="Frontend URL"
            className="input input-bordered w-full"
          />
          <input
            {...register('backend')}
            placeholder="Backend URL (if any)"
            className="input input-bordered w-full"
          />
          <input
            {...register('liveDemo')}
            placeholder="Live Demo URL"
            className="input input-bordered w-full"
          />
          <input
            {...register('thumbnail')}
            placeholder="Thumbnail URL"
            className="input input-bordered w-full"
            required
          />
          <input
            type="number"
            {...register('year')}
            placeholder="Year"
            className="input input-bordered w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="btn bg-[#9810FA] text-white mt-4 w-full"
        >
          Add Project
        </button>
      </form>
    </div>
  );
}