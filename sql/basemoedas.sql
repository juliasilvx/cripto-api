-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 11-Mar-2023 às 01:47
-- Versão do servidor: 10.4.11-MariaDB
-- versão do PHP: 7.2.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `basemoedas`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `coretoras`
--

CREATE TABLE `coretoras` (
  `ID_CORRETORA` int(11) NOT NULL,
  `NOME` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `coretoras`
--

INSERT INTO `coretoras` (`ID_CORRETORA`, `NOME`) VALUES
(1, 'Binance'),
(2, 'Coinbase'),
(3, 'Kraken'),
(4, 'RobinHood'),
(5, 'FTX'),
(6, 'Gemini'),
(7, 'GMO Coin'),
(8, 'eToro'),
(9, 'Plus500'),
(10, 'CEX.IO');

-- --------------------------------------------------------

--
-- Estrutura da tabela `moedas`
--

CREATE TABLE `moedas` (
  `ID_MOEDA` int(11) NOT NULL,
  `NOME` varchar(100) DEFAULT NULL,
  `PRECO_COMPRA_VENDA` double DEFAULT NULL,
  `UNIDADE_MONETARIA_COMPRA_VENDA` varchar(45) DEFAULT NULL,
  `DESCRICAO` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `moedas`
--

INSERT INTO `moedas` (`ID_MOEDA`, `NOME`, `PRECO_COMPRA_VENDA`, `UNIDADE_MONETARIA_COMPRA_VENDA`, `DESCRICAO`) VALUES
(1, 'Bitcoin-1', 200000, 'BRL', 'teste'),
(2, 'JulixCoin', 200000, 'BRL', 'teste'),
(3, 'Elacoin', 200000, 'BRL', 'teste'),
(4, 'Elecoin', 500000, 'BRL', 'teste'),
(5, 'Fulanocoin', 800000, 'BRL', 'teste'),
(6, 'Tether ', 30000, 'BRL', 'teste'),
(7, 'USD Coin', 120000, 'BRL', 'teste'),
(8, 'Ripple', 140000, 'BRL', 'teste'),
(9, 'Cardano ', 700000, 'BRL', 'teste'),
(10, 'Solana ', 170000, 'BRL', 'teste');

-- --------------------------------------------------------

--
-- Estrutura da tabela `moedas_has_coretoras`
--

CREATE TABLE `moedas_has_coretoras` (
  `MOEDAS_ID_MOEDA` int(11) NOT NULL,
  `CORETORAS_ID_CORRETORA` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `moedas_has_coretoras`
--

INSERT INTO `moedas_has_coretoras` (`MOEDAS_ID_MOEDA`, `CORETORAS_ID_CORRETORA`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10);

-- --------------------------------------------------------

--
-- Estrutura da tabela `moedas_has_paridades`
--

CREATE TABLE `moedas_has_paridades` (
  `MOEDAS_ID_MOEDA` int(11) NOT NULL,
  `PARIDADES_ID_PARIDADE` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `moedas_has_paridades`
--

INSERT INTO `moedas_has_paridades` (`MOEDAS_ID_MOEDA`, `PARIDADES_ID_PARIDADE`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10);

-- --------------------------------------------------------

--
-- Estrutura da tabela `paridades`
--

CREATE TABLE `paridades` (
  `ID_PARIDADE` int(11) NOT NULL,
  `NOME` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `paridades`
--

INSERT INTO `paridades` (`ID_PARIDADE`, `NOME`) VALUES
(1, 'BNB'),
(2, 'Cracken'),
(3, 'Dogecoin'),
(4, 'Polkadot'),
(5, 'Shiba Inu'),
(6, 'BNB'),
(7, 'BTC'),
(8, 'ETH'),
(9, 'USDC'),
(10, 'BNB');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `coretoras`
--
ALTER TABLE `coretoras`
  ADD PRIMARY KEY (`ID_CORRETORA`);

--
-- Índices para tabela `moedas`
--
ALTER TABLE `moedas`
  ADD PRIMARY KEY (`ID_MOEDA`);

--
-- Índices para tabela `moedas_has_coretoras`
--
ALTER TABLE `moedas_has_coretoras`
  ADD PRIMARY KEY (`MOEDAS_ID_MOEDA`,`CORETORAS_ID_CORRETORA`),
  ADD KEY `fk_MOEDAS_has_CORETORAS_CORETORAS1` (`CORETORAS_ID_CORRETORA`);

--
-- Índices para tabela `moedas_has_paridades`
--
ALTER TABLE `moedas_has_paridades`
  ADD PRIMARY KEY (`MOEDAS_ID_MOEDA`,`PARIDADES_ID_PARIDADE`),
  ADD KEY `fk_MOEDAS_has_PARIDADES_PARIDADES1` (`PARIDADES_ID_PARIDADE`);

--
-- Índices para tabela `paridades`
--
ALTER TABLE `paridades`
  ADD PRIMARY KEY (`ID_PARIDADE`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `coretoras`
--
ALTER TABLE `coretoras`
  MODIFY `ID_CORRETORA` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de tabela `moedas`
--
ALTER TABLE `moedas`
  MODIFY `ID_MOEDA` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de tabela `paridades`
--
ALTER TABLE `paridades`
  MODIFY `ID_PARIDADE` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `moedas_has_coretoras`
--
ALTER TABLE `moedas_has_coretoras`
  ADD CONSTRAINT `fk_MOEDAS_has_CORETORAS_CORETORAS1` FOREIGN KEY (`CORETORAS_ID_CORRETORA`) REFERENCES `coretoras` (`ID_CORRETORA`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_MOEDAS_has_CORETORAS_MOEDAS` FOREIGN KEY (`MOEDAS_ID_MOEDA`) REFERENCES `moedas` (`ID_MOEDA`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `moedas_has_paridades`
--
ALTER TABLE `moedas_has_paridades`
  ADD CONSTRAINT `fk_MOEDAS_has_PARIDADES_MOEDAS1` FOREIGN KEY (`MOEDAS_ID_MOEDA`) REFERENCES `moedas` (`ID_MOEDA`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_MOEDAS_has_PARIDADES_PARIDADES1` FOREIGN KEY (`PARIDADES_ID_PARIDADE`) REFERENCES `paridades` (`ID_PARIDADE`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
