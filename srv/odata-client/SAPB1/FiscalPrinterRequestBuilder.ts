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
import { FiscalPrinter } from './FiscalPrinter';

/**
 * Request builder class for operations supported on the {@link FiscalPrinter} entity.
 */
export class FiscalPrinterRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FiscalPrinter<T>, T> {
  /**
   * Returns a request builder for retrieving one `FiscalPrinter` entity based on its keys.
   * @param equipmentNo Key property. See {@link FiscalPrinter.equipmentNo}.
   * @returns A request builder for creating requests to retrieve one `FiscalPrinter` entity based on its keys.
   */
  getByKey(
    equipmentNo: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FiscalPrinter<T>, T> {
    return new GetByKeyRequestBuilder<FiscalPrinter<T>, T>(this.entityApi, {
      EquipmentNo: equipmentNo
    });
  }

  /**
   * Returns a request builder for querying all `FiscalPrinter` entities.
   * @returns A request builder for creating requests to retrieve all `FiscalPrinter` entities.
   */
  getAll(): GetAllRequestBuilder<FiscalPrinter<T>, T> {
    return new GetAllRequestBuilder<FiscalPrinter<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `FiscalPrinter` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FiscalPrinter`.
   */
  create(entity: FiscalPrinter<T>): CreateRequestBuilder<FiscalPrinter<T>, T> {
    return new CreateRequestBuilder<FiscalPrinter<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `FiscalPrinter`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FiscalPrinter`.
   */
  update(entity: FiscalPrinter<T>): UpdateRequestBuilder<FiscalPrinter<T>, T> {
    return new UpdateRequestBuilder<FiscalPrinter<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FiscalPrinter`.
   * @param equipmentNo Key property. See {@link FiscalPrinter.equipmentNo}.
   * @returns A request builder for creating requests that delete an entity of type `FiscalPrinter`.
   */
  delete(equipmentNo: string): DeleteRequestBuilder<FiscalPrinter<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FiscalPrinter`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FiscalPrinter` by taking the entity as a parameter.
   */
  delete(entity: FiscalPrinter<T>): DeleteRequestBuilder<FiscalPrinter<T>, T>;
  delete(equipmentNoOrEntity: any): DeleteRequestBuilder<FiscalPrinter<T>, T> {
    return new DeleteRequestBuilder<FiscalPrinter<T>, T>(
      this.entityApi,
      equipmentNoOrEntity instanceof FiscalPrinter
        ? equipmentNoOrEntity
        : { EquipmentNo: equipmentNoOrEntity! }
    );
  }
}
