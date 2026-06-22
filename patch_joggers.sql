-- Ajouter la colonne joggers manquante
alter table public.profiles add column if not exists declencheur_joggers boolean default false;

select pg_notify('pgrst', 'reload schema');
