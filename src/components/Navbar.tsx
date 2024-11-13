'use client';
import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineSearch, AiOutlineBell } from "react-icons/ai";

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false); // Controla a visibilidade do menu de perfil
  const [isNotificationsMenuOpen, setIsNotificationsMenuOpen] = useState(false); // Controla o menu de notificações

  // Exemplo de URL da imagem do perfil, substitua com a lógica para carregar dinamicamente.
  const profileImage = "/foto.png"; // Substitua pelo URL ou caminho da imagem do perfil

  const handleSearchChange = (e: any) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    // Aqui você pode definir a lógica para realizar a pesquisa
    console.log('Pesquisando por:', searchQuery);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const toggleNotificationsMenu = () => {
    setIsNotificationsMenuOpen(!isNotificationsMenuOpen);
  };

  return (
    <div className="bg-[var(--primary)] px-4 h-[65px] text-white shadow-lg">
      <div className="flex items-center justify-between g-gray-800 border-white p-4">
        {/* Logo e nome */}
        {!isCollapsed && (
          <h1 className="text-3xl font-bold text-[var(--text)] flex items-center">
            <Link href="/" className="flex items-center">
              <img 
                src="/logo.png"  // Caminho para o seu logo
                alt="Logo" 
                className="mr-2 w-8 h-8"  // Define o tamanho do logo
              />
              Verbix
            </Link>
          </h1>
        )}

        {/* Campo de pesquisa e perfil */}
        <div className="flex items-center space-x-4">
          {/* Campo de pesquisa com botão */}
          <div className="relative">
            <input
              type="text"
              placeholder="Pesquisar..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="pl-10 pr-4 py-2 rounded-full bg-[var(--secondary)] text-text focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            />
            <AiOutlineSearch
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-500 cursor-pointer"
              onClick={handleSearch}
            />
          </div>

          {/* Ícone de Notificação */}
          <div className="relative">
            <AiOutlineBell 
              className="w-6 h-6 text-text cursor-pointer"
              onClick={toggleNotificationsMenu} // Toca para alternar o menu de notificações
            />
            {/* Indicador de novas notificações */}
            <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full"></div>

            {/* Menu suspenso de notificações */}
            {isNotificationsMenuOpen && (
              <div className="absolute top-12 right-0 bg-white text-black rounded-lg shadow-lg w-80 py-2 z-10">
                <div className="px-4 py-2 border-b">
                  <h3 className="text-lg font-bold">Notificações</h3>
                </div>
                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <p>Nova mensagem de usuário.</p>
                </div>
                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <p>Seu perfil foi atualizado.</p>
                </div>
                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <p>Você ganhou uma medalha no ranking!</p>
                </div>
                <Link href="/notificacoes">
                  <div className="px-4 py-2 text-center hover:bg-gray-100 cursor-pointer">Ver todas as notificações</div>
                </Link>
              </div>
            )}
          </div>

          {/* Menu de Perfil */}
          <div className="relative">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center cursor-pointer" onClick={toggleProfileMenu}>
              <img 
                src={profileImage} // A imagem do perfil é carregada aqui
                alt="Perfil"
                className="w-8 h-8 rounded-full object-cover"
              />
            </div>

            {/* Menu suspenso de perfil */}
            {isProfileMenuOpen && (
              <div className="absolute top-12 right-0 bg-white text-black rounded-lg shadow-lg w-40 py-2">
                <Link href="/perfil">
                  <div className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Perfil</div>
                </Link>
                <Link href="/configuracoes">
                  <div className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Configurações</div>
                </Link>
                <div className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Sair</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
