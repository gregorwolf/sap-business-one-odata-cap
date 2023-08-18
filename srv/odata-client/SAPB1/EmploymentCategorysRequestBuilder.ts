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
import { EmploymentCategorys } from './EmploymentCategorys';

/**
 * Request builder class for operations supported on the {@link EmploymentCategorys} entity.
 */
export class EmploymentCategorysRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EmploymentCategorys<T>, T> {
  /**
   * Returns a request builder for retrieving one `EmploymentCategorys` entity based on its keys.
   * @param code Key property. See {@link EmploymentCategorys.code}.
   * @returns A request builder for creating requests to retrieve one `EmploymentCategorys` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EmploymentCategorys<T>, T> {
    return new GetByKeyRequestBuilder<EmploymentCategorys<T>, T>(
      this.entityApi,
      { Code: code }
    );
  }

  /**
   * Returns a request builder for querying all `EmploymentCategorys` entities.
   * @returns A request builder for creating requests to retrieve all `EmploymentCategorys` entities.
   */
  getAll(): GetAllRequestBuilder<EmploymentCategorys<T>, T> {
    return new GetAllRequestBuilder<EmploymentCategorys<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EmploymentCategorys` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EmploymentCategorys`.
   */
  create(
    entity: EmploymentCategorys<T>
  ): CreateRequestBuilder<EmploymentCategorys<T>, T> {
    return new CreateRequestBuilder<EmploymentCategorys<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EmploymentCategorys`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EmploymentCategorys`.
   */
  update(
    entity: EmploymentCategorys<T>
  ): UpdateRequestBuilder<EmploymentCategorys<T>, T> {
    return new UpdateRequestBuilder<EmploymentCategorys<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EmploymentCategorys`.
   * @param code Key property. See {@link EmploymentCategorys.code}.
   * @returns A request builder for creating requests that delete an entity of type `EmploymentCategorys`.
   */
  delete(code: string): DeleteRequestBuilder<EmploymentCategorys<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EmploymentCategorys`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EmploymentCategorys` by taking the entity as a parameter.
   */
  delete(
    entity: EmploymentCategorys<T>
  ): DeleteRequestBuilder<EmploymentCategorys<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<EmploymentCategorys<T>, T> {
    return new DeleteRequestBuilder<EmploymentCategorys<T>, T>(
      this.entityApi,
      codeOrEntity instanceof EmploymentCategorys
        ? codeOrEntity
        : { Code: codeOrEntity! }
    );
  }
}
