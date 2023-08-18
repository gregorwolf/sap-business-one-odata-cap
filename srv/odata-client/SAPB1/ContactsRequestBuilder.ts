/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  DefaultDeSerializers,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  CreateRequestBuilder,
  UpdateRequestBuilder,
  DeleteRequestBuilder,
  DeserializedType,
  RequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { Contacts } from './Contacts';

/**
 * Request builder class for operations supported on the {@link Contacts} entity.
 */
export class ContactsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Contacts<T>, T> {
  /**
   * Returns a request builder for retrieving one `Contacts` entity based on its keys.
   * @param contactCode Key property. See {@link Contacts.contactCode}.
   * @returns A request builder for creating requests to retrieve one `Contacts` entity based on its keys.
   */
  getByKey(
    contactCode: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<Contacts<T>, T> {
    return new GetByKeyRequestBuilder<Contacts<T>, T>(this.entityApi, {
      ContactCode: contactCode
    });
  }

  /**
   * Returns a request builder for querying all `Contacts` entities.
   * @returns A request builder for creating requests to retrieve all `Contacts` entities.
   */
  getAll(): GetAllRequestBuilder<Contacts<T>, T> {
    return new GetAllRequestBuilder<Contacts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Contacts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Contacts`.
   */
  create(entity: Contacts<T>): CreateRequestBuilder<Contacts<T>, T> {
    return new CreateRequestBuilder<Contacts<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Contacts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Contacts`.
   */
  update(entity: Contacts<T>): UpdateRequestBuilder<Contacts<T>, T> {
    return new UpdateRequestBuilder<Contacts<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Contacts`.
   * @param contactCode Key property. See {@link Contacts.contactCode}.
   * @returns A request builder for creating requests that delete an entity of type `Contacts`.
   */
  delete(contactCode: number): DeleteRequestBuilder<Contacts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Contacts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Contacts` by taking the entity as a parameter.
   */
  delete(entity: Contacts<T>): DeleteRequestBuilder<Contacts<T>, T>;
  delete(contactCodeOrEntity: any): DeleteRequestBuilder<Contacts<T>, T> {
    return new DeleteRequestBuilder<Contacts<T>, T>(
      this.entityApi,
      contactCodeOrEntity instanceof Contacts
        ? contactCodeOrEntity
        : { ContactCode: contactCodeOrEntity! }
    );
  }
}
