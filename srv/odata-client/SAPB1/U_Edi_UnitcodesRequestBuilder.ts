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
import { U_Edi_Unitcodes } from './U_Edi_Unitcodes';

/**
 * Request builder class for operations supported on the {@link U_Edi_Unitcodes} entity.
 */
export class U_Edi_UnitcodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<U_Edi_Unitcodes<T>, T> {
  /**
   * Returns a request builder for retrieving one `U_Edi_Unitcodes` entity based on its keys.
   * @param code Key property. See {@link U_Edi_Unitcodes.code}.
   * @returns A request builder for creating requests to retrieve one `U_Edi_Unitcodes` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<U_Edi_Unitcodes<T>, T> {
    return new GetByKeyRequestBuilder<U_Edi_Unitcodes<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `U_Edi_Unitcodes` entities.
   * @returns A request builder for creating requests to retrieve all `U_Edi_Unitcodes` entities.
   */
  getAll(): GetAllRequestBuilder<U_Edi_Unitcodes<T>, T> {
    return new GetAllRequestBuilder<U_Edi_Unitcodes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `U_Edi_Unitcodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `U_Edi_Unitcodes`.
   */
  create(
    entity: U_Edi_Unitcodes<T>
  ): CreateRequestBuilder<U_Edi_Unitcodes<T>, T> {
    return new CreateRequestBuilder<U_Edi_Unitcodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `U_Edi_Unitcodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `U_Edi_Unitcodes`.
   */
  update(
    entity: U_Edi_Unitcodes<T>
  ): UpdateRequestBuilder<U_Edi_Unitcodes<T>, T> {
    return new UpdateRequestBuilder<U_Edi_Unitcodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `U_Edi_Unitcodes`.
   * @param code Key property. See {@link U_Edi_Unitcodes.code}.
   * @returns A request builder for creating requests that delete an entity of type `U_Edi_Unitcodes`.
   */
  delete(code: string): DeleteRequestBuilder<U_Edi_Unitcodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `U_Edi_Unitcodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `U_Edi_Unitcodes` by taking the entity as a parameter.
   */
  delete(
    entity: U_Edi_Unitcodes<T>
  ): DeleteRequestBuilder<U_Edi_Unitcodes<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<U_Edi_Unitcodes<T>, T> {
    return new DeleteRequestBuilder<U_Edi_Unitcodes<T>, T>(
      this.entityApi,
      codeOrEntity instanceof U_Edi_Unitcodes
        ? codeOrEntity
        : { Code: codeOrEntity! }
    );
  }
}
