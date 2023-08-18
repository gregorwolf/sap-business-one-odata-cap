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
import { Holidays } from './Holidays';

/**
 * Request builder class for operations supported on the {@link Holidays} entity.
 */
export class HolidaysRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Holidays<T>, T> {
  /**
   * Returns a request builder for retrieving one `Holidays` entity based on its keys.
   * @param holidayCode Key property. See {@link Holidays.holidayCode}.
   * @returns A request builder for creating requests to retrieve one `Holidays` entity based on its keys.
   */
  getByKey(
    holidayCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Holidays<T>, T> {
    return new GetByKeyRequestBuilder<Holidays<T>, T>(this.entityApi, {
      HolidayCode: holidayCode
    });
  }

  /**
   * Returns a request builder for querying all `Holidays` entities.
   * @returns A request builder for creating requests to retrieve all `Holidays` entities.
   */
  getAll(): GetAllRequestBuilder<Holidays<T>, T> {
    return new GetAllRequestBuilder<Holidays<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Holidays` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Holidays`.
   */
  create(entity: Holidays<T>): CreateRequestBuilder<Holidays<T>, T> {
    return new CreateRequestBuilder<Holidays<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Holidays`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Holidays`.
   */
  update(entity: Holidays<T>): UpdateRequestBuilder<Holidays<T>, T> {
    return new UpdateRequestBuilder<Holidays<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Holidays`.
   * @param holidayCode Key property. See {@link Holidays.holidayCode}.
   * @returns A request builder for creating requests that delete an entity of type `Holidays`.
   */
  delete(holidayCode: string): DeleteRequestBuilder<Holidays<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Holidays`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Holidays` by taking the entity as a parameter.
   */
  delete(entity: Holidays<T>): DeleteRequestBuilder<Holidays<T>, T>;
  delete(holidayCodeOrEntity: any): DeleteRequestBuilder<Holidays<T>, T> {
    return new DeleteRequestBuilder<Holidays<T>, T>(
      this.entityApi,
      holidayCodeOrEntity instanceof Holidays
        ? holidayCodeOrEntity
        : { HolidayCode: holidayCodeOrEntity! }
    );
  }
}
