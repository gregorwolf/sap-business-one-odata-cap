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
import { Forms1099 } from './Forms1099';

/**
 * Request builder class for operations supported on the {@link Forms1099} entity.
 */
export class Forms1099RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Forms1099<T>, T> {
  /**
   * Returns a request builder for retrieving one `Forms1099` entity based on its keys.
   * @param formCode Key property. See {@link Forms1099.formCode}.
   * @returns A request builder for creating requests to retrieve one `Forms1099` entity based on its keys.
   */
  getByKey(
    formCode: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<Forms1099<T>, T> {
    return new GetByKeyRequestBuilder<Forms1099<T>, T>(this.entityApi, {
      FormCode: formCode
    });
  }

  /**
   * Returns a request builder for querying all `Forms1099` entities.
   * @returns A request builder for creating requests to retrieve all `Forms1099` entities.
   */
  getAll(): GetAllRequestBuilder<Forms1099<T>, T> {
    return new GetAllRequestBuilder<Forms1099<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Forms1099` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Forms1099`.
   */
  create(entity: Forms1099<T>): CreateRequestBuilder<Forms1099<T>, T> {
    return new CreateRequestBuilder<Forms1099<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Forms1099`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Forms1099`.
   */
  update(entity: Forms1099<T>): UpdateRequestBuilder<Forms1099<T>, T> {
    return new UpdateRequestBuilder<Forms1099<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Forms1099`.
   * @param formCode Key property. See {@link Forms1099.formCode}.
   * @returns A request builder for creating requests that delete an entity of type `Forms1099`.
   */
  delete(formCode: number): DeleteRequestBuilder<Forms1099<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Forms1099`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Forms1099` by taking the entity as a parameter.
   */
  delete(entity: Forms1099<T>): DeleteRequestBuilder<Forms1099<T>, T>;
  delete(formCodeOrEntity: any): DeleteRequestBuilder<Forms1099<T>, T> {
    return new DeleteRequestBuilder<Forms1099<T>, T>(
      this.entityApi,
      formCodeOrEntity instanceof Forms1099
        ? formCodeOrEntity
        : { FormCode: formCodeOrEntity! }
    );
  }
}
