USE [master]
GO
/****** Object:  Database [DbFPV_TMA]    Script Date: 09/04/2021 17:34:53 ******/
CREATE DATABASE [DbFPV_TMA]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'DbFPV_TMA', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\DbFPV_TMA.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'DbFPV_TMA_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\DbFPV_TMA_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [DbFPV_TMA] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [DbFPV_TMA].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [DbFPV_TMA] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [DbFPV_TMA] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [DbFPV_TMA] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [DbFPV_TMA] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [DbFPV_TMA] SET ARITHABORT OFF 
GO
ALTER DATABASE [DbFPV_TMA] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [DbFPV_TMA] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [DbFPV_TMA] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [DbFPV_TMA] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [DbFPV_TMA] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [DbFPV_TMA] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [DbFPV_TMA] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [DbFPV_TMA] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [DbFPV_TMA] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [DbFPV_TMA] SET  DISABLE_BROKER 
GO
ALTER DATABASE [DbFPV_TMA] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [DbFPV_TMA] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [DbFPV_TMA] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [DbFPV_TMA] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [DbFPV_TMA] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [DbFPV_TMA] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [DbFPV_TMA] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [DbFPV_TMA] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [DbFPV_TMA] SET  MULTI_USER 
GO
ALTER DATABASE [DbFPV_TMA] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [DbFPV_TMA] SET DB_CHAINING OFF 
GO
ALTER DATABASE [DbFPV_TMA] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [DbFPV_TMA] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [DbFPV_TMA] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [DbFPV_TMA] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [DbFPV_TMA] SET QUERY_STORE = OFF
GO
USE [DbFPV_TMA]
GO
/****** Object:  Table [dbo].[T_Frame]    Script Date: 09/04/2021 17:34:53 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[T_Frame](
	[Fr_Id] [int] IDENTITY(1,1) NOT NULL,
	[Fr_Marque] [varchar](50) NOT NULL,
	[Fr_Modele] [varchar](50) NULL,
	[Fr_Poids] [decimal](18, 3) NULL,
	[Fr_Description] [varchar](max) NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[T_Usage]    Script Date: 09/04/2021 17:34:53 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[T_Usage](
	[Tu_Id] [int] IDENTITY(1,1) NOT NULL,
	[Tu_Nom] [varchar](50) NOT NULL,
	[Tu_Description] [varchar](max) NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[T_Frame] ON 

INSERT [dbo].[T_Frame] ([Fr_Id], [Fr_Marque], [Fr_Modele], [Fr_Poids], [Fr_Description]) VALUES (1, N'PiratFrames', N'Sloop V3', NULL, NULL)
INSERT [dbo].[T_Frame] ([Fr_Id], [Fr_Marque], [Fr_Modele], [Fr_Poids], [Fr_Description]) VALUES (2, N'PiratFrames', N'Hook', CAST(0.630 AS Decimal(18, 3)), NULL)
INSERT [dbo].[T_Frame] ([Fr_Id], [Fr_Marque], [Fr_Modele], [Fr_Poids], [Fr_Description]) VALUES (3, N'Team Mistral', N'AK47', CAST(0.000 AS Decimal(18, 3)), N'')
SET IDENTITY_INSERT [dbo].[T_Frame] OFF
GO
SET IDENTITY_INSERT [dbo].[T_Usage] ON 

INSERT [dbo].[T_Usage] ([Tu_Id], [Tu_Nom], [Tu_Description]) VALUES (1, N'Freestyle', N'Faire le con et se percher dans un arbre.')
INSERT [dbo].[T_Usage] ([Tu_Id], [Tu_Nom], [Tu_Description]) VALUES (2, N'Cinematique', N'Vous avez toujours rêvé de vous prendre pour Stéphane Couchoud.')
INSERT [dbo].[T_Usage] ([Tu_Id], [Tu_Nom], [Tu_Description]) VALUES (3, N'Long range', N'Vers l''infini et au delà !')
INSERT [dbo].[T_Usage] ([Tu_Id], [Tu_Nom], [Tu_Description]) VALUES (4, N'Race', N'Passer des gates à 200 km/h ne vous fait pas peur.')
SET IDENTITY_INSERT [dbo].[T_Usage] OFF
GO
/****** Object:  StoredProcedure [dbo].[PS_DeleteFrame]    Script Date: 09/04/2021 17:34:53 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[PS_DeleteFrame] 
	-- Add the parameters for the stored procedure here
	@Id int
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	DELETE FROM T_Frame
      WHERE Fr_Id = @Id
END
GO
/****** Object:  StoredProcedure [dbo].[PS_DeleteUsage]    Script Date: 09/04/2021 17:34:53 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[PS_DeleteUsage] 
	-- Add the parameters for the stored procedure here
	@Id int
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	DELETE FROM T_Usage
      WHERE Tu_Id = @Id
END
GO
/****** Object:  StoredProcedure [dbo].[PS_GetFrames]    Script Date: 09/04/2021 17:34:53 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[PS_GetFrames]

AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	SELECT Fr_Id
      ,Fr_Marque
      ,Fr_Modele
      ,Fr_Poids
      ,Fr_Description
  FROM T_Frame
END
GO
/****** Object:  StoredProcedure [dbo].[PS_GetUsages]    Script Date: 09/04/2021 17:34:53 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[PS_GetUsages]

AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	SELECT Tu_Id
      ,Tu_Nom
      ,Tu_Description
  FROM T_Usage
END
GO
/****** Object:  StoredProcedure [dbo].[PS_PostFrame]    Script Date: 09/04/2021 17:34:53 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[PS_PostFrame] 
	-- Add the parameters for the stored procedure here
	@Marque varchar(50) = '', 
	@Modele varchar(50) = '',
	@Poids decimal(18,3) = '',
	@Description nvarchar(max) = ''
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	INSERT INTO T_Frame
           (Fr_Marque
           ,Fr_Modele
           ,Fr_Poids
           ,Fr_Description)
     VALUES
           (@Marque
           ,@Modele
           ,@Poids
           ,@Description)
END
GO
/****** Object:  StoredProcedure [dbo].[PS_PostUsage]    Script Date: 09/04/2021 17:34:53 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[PS_PostUsage] 
	-- Add the parameters for the stored procedure here
	@Nom varchar(50) = '', 
	@Description varchar(MAX) = ''
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	INSERT INTO T_Usage
           (Tu_Nom
           ,Tu_Description)
     VALUES
           (@Nom,
           @Description)
END
GO
/****** Object:  StoredProcedure [dbo].[PS_UpdateFrame]    Script Date: 09/04/2021 17:34:53 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[PS_UpdateFrame]
	-- Add the parameters for the stored procedure here
	@Id int,
	@Marque varchar(50) = '', 
	@Modele varchar(50) = '',
	@Poids decimal(18,3) = '0.000',
	@Description varchar(MAX) = ''
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	UPDATE [dbo].[T_Frame]
   SET [Fr_Marque] = @Marque
      ,[Fr_Modele] = @Modele
      ,[Fr_Poids] = @Poids
      ,[Fr_Description] = @Description
 WHERE T_Frame.Fr_Id = @Id
END
GO
/****** Object:  StoredProcedure [dbo].[PS_UpdateUsage]    Script Date: 09/04/2021 17:34:53 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[PS_UpdateUsage] 
	-- Add the parameters for the stored procedure here
	@Id int,
	@Nom varchar(50) = '', 
	@Description varchar(MAX) = ''
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	UPDATE T_Usage
   SET Tu_Nom = @Nom
      ,Tu_Description = @Description
 WHERE T_Usage.Tu_Id = @Id
END
GO
USE [master]
GO
ALTER DATABASE [DbFPV_TMA] SET  READ_WRITE 
GO
