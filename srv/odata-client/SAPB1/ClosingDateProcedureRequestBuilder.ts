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
import { ClosingDateProcedure } from './ClosingDateProcedure';

/**
 * Request builder class for operations supported on the {@link ClosingDateProcedure} entity.
 */
export class ClosingDateProcedureRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ClosingDateProcedure<T>, T> {
  /**
   * Returns a request builder for retrieving one `ClosingDateProcedure` entity based on its keys.
   * @param closingDateNum Key property. See {@link ClosingDateProcedure.closingDateNum}.
   * @returns A request builder for creating requests to retrieve one `ClosingDateProcedure` entity based on its keys.
   */
  getByKey(
    closingDateNum: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<ClosingDateProcedure<T>, T> {
    return new GetByKeyRequestBuilder<ClosingDateProcedure<T>, T>(
      this.entityApi,
      { ClosingDateNum: closingDateNum }
    );
  }

  /**
   * Returns a request builder for querying all `ClosingDateProcedure` entities.
   * @returns A request builder for creating requests to retrieve all `ClosingDateProcedure` entities.
   */
  getAll(): GetAllRequestBuilder<ClosingDateProcedure<T>, T> {
    return new GetAllRequestBuilder<ClosingDateProcedure<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ClosingDateProcedure` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ClosingDateProcedure`.
   */
  create(
    entity: ClosingDateProcedure<T>
  ): CreateRequestBuilder<ClosingDateProcedure<T>, T> {
    return new CreateRequestBuilder<ClosingDateProcedure<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ClosingDateProcedure`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ClosingDateProcedure`.
   */
  update(
    entity: ClosingDateProcedure<T>
  ): UpdateRequestBuilder<ClosingDateProcedure<T>, T> {
    return new UpdateRequestBuilder<ClosingDateProcedure<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ClosingDateProcedure`.
   * @param closingDateNum Key property. See {@link ClosingDateProcedure.closingDateNum}.
   * @returns A request builder for creating requests that delete an entity of type `ClosingDateProcedure`.
   */
  delete(
    closingDateNum: number
  ): DeleteRequestBuilder<ClosingDateProcedure<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ClosingDateProcedure`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ClosingDateProcedure` by taking the entity as a parameter.
   */
  delete(
    entity: ClosingDateProcedure<T>
  ): DeleteRequestBuilder<ClosingDateProcedure<T>, T>;
  delete(
    closingDateNumOrEntity: any
  ): DeleteRequestBuilder<ClosingDateProcedure<T>, T> {
    return new DeleteRequestBuilder<ClosingDateProcedure<T>, T>(
      this.entityApi,
      closingDateNumOrEntity instanceof ClosingDateProcedure
        ? closingDateNumOrEntity
        : { ClosingDateNum: closingDateNumOrEntity! }
    );
  }
}
