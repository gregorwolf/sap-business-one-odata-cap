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
import { EmailGroups } from './EmailGroups';

/**
 * Request builder class for operations supported on the {@link EmailGroups} entity.
 */
export class EmailGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EmailGroups<T>, T> {
  /**
   * Returns a request builder for retrieving one `EmailGroups` entity based on its keys.
   * @param emailGroupCode Key property. See {@link EmailGroups.emailGroupCode}.
   * @returns A request builder for creating requests to retrieve one `EmailGroups` entity based on its keys.
   */
  getByKey(
    emailGroupCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EmailGroups<T>, T> {
    return new GetByKeyRequestBuilder<EmailGroups<T>, T>(this.entityApi, {
      EmailGroupCode: emailGroupCode
    });
  }

  /**
   * Returns a request builder for querying all `EmailGroups` entities.
   * @returns A request builder for creating requests to retrieve all `EmailGroups` entities.
   */
  getAll(): GetAllRequestBuilder<EmailGroups<T>, T> {
    return new GetAllRequestBuilder<EmailGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EmailGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EmailGroups`.
   */
  create(entity: EmailGroups<T>): CreateRequestBuilder<EmailGroups<T>, T> {
    return new CreateRequestBuilder<EmailGroups<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `EmailGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EmailGroups`.
   */
  update(entity: EmailGroups<T>): UpdateRequestBuilder<EmailGroups<T>, T> {
    return new UpdateRequestBuilder<EmailGroups<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `EmailGroups`.
   * @param emailGroupCode Key property. See {@link EmailGroups.emailGroupCode}.
   * @returns A request builder for creating requests that delete an entity of type `EmailGroups`.
   */
  delete(emailGroupCode: string): DeleteRequestBuilder<EmailGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EmailGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EmailGroups` by taking the entity as a parameter.
   */
  delete(entity: EmailGroups<T>): DeleteRequestBuilder<EmailGroups<T>, T>;
  delete(emailGroupCodeOrEntity: any): DeleteRequestBuilder<EmailGroups<T>, T> {
    return new DeleteRequestBuilder<EmailGroups<T>, T>(
      this.entityApi,
      emailGroupCodeOrEntity instanceof EmailGroups
        ? emailGroupCodeOrEntity
        : { EmailGroupCode: emailGroupCodeOrEntity! }
    );
  }
}
