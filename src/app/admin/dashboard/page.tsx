'use client';

import AdminLayout from '@/app/components/adminlayout/adminlayout';

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Tableau de bord Administrateur</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-medium text-blue-800">Utilisateurs</h3>
            <p className="text-2xl font-bold">1,234</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-medium text-green-800">Articles</h3>
            <p className="text-2xl font-bold">567</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-medium text-purple-800">Commentaires</h3>
            <p className="text-2xl font-bold">8,901</p>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-medium mb-4">Dernières activités</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p>Aucune activité récente</p>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}