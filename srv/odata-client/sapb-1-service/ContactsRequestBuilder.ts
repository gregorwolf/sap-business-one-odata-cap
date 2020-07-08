/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { Contacts } from './Contacts';

/**
 * Request builder class for operations supported on the [[Contacts]] entity.
 */
export class ContactsRequestBuilder extends RequestBuilder<Contacts> {
  /**
   * Returns a request builder for retrieving one `Contacts` entity based on its keys.
   * @param contactCode Key property. See [[Contacts.contactCode]].
   * @returns A request builder for creating requests to retrieve one `Contacts` entity based on its keys.
   */
  getByKey(contactCode: number): GetByKeyRequestBuilder<Contacts> {
    return new GetByKeyRequestBuilder(Contacts, { ContactCode: contactCode });
  }

  /**
   * Returns a request builder for querying all `Contacts` entities.
   * @returns A request builder for creating requests to retrieve all `Contacts` entities.
   */
  getAll(): GetAllRequestBuilder<Contacts> {
    return new GetAllRequestBuilder(Contacts);
  }

  /**
   * Returns a request builder for creating a `Contacts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Contacts`.
   */
  create(entity: Contacts): CreateRequestBuilder<Contacts> {
    return new CreateRequestBuilder(Contacts, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Contacts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Contacts`.
   */
  update(entity: Contacts): UpdateRequestBuilder<Contacts> {
    return new UpdateRequestBuilder(Contacts, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Contacts`.
   * @param contactCode Key property. See [[Contacts.contactCode]].
   * @returns A request builder for creating requests that delete an entity of type `Contacts`.
   */
  delete(contactCode: number): DeleteRequestBuilder<Contacts>;
  /**
   * Returns a request builder for deleting an entity of type `Contacts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Contacts` by taking the entity as a parameter.
   */
  delete(entity: Contacts): DeleteRequestBuilder<Contacts>;
  delete(contactCodeOrEntity: any): DeleteRequestBuilder<Contacts> {
    return new DeleteRequestBuilder(Contacts, contactCodeOrEntity instanceof Contacts ? contactCodeOrEntity : { ContactCode: contactCodeOrEntity! });
  }
}
