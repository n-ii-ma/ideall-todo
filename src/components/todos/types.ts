import type { Todo } from '@/interfaces/global/types';

export interface TodoCardProps {
  /** Todo item */
  item: Todo;

  /** Todo card height */
  cardHeight?: number;
}
