export interface Board {
    // Adding a QUESTIONMARK in front of each property makes it an OPTIONAL property.
    // Firestore (aNoSQL database)
    // Sometimes we will want to write a partial amount of data to the database,
    // Other times the data won't exist at first, as we make an attempt to write to the database
    id?: string;
    title?: string;
    priority?: number;
    tasks?: Task[];
  }

export interface Task {
    description?: string;
    label?: 'purple' | 'blue' | 'green' | 'yellow' | 'red' | 'gray';
}