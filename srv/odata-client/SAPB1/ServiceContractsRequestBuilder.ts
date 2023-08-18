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
import { ServiceContracts } from './ServiceContracts';

/**
 * Request builder class for operations supported on the {@link ServiceContracts} entity.
 */
export class ServiceContractsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ServiceContracts<T>, T> {
  /**
   * Returns a request builder for retrieving one `ServiceContracts` entity based on its keys.
   * @param contractId Key property. See {@link ServiceContracts.contractId}.
   * @returns A request builder for creating requests to retrieve one `ServiceContracts` entity based on its keys.
   */
  getByKey(
    contractId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<ServiceContracts<T>, T> {
    return new GetByKeyRequestBuilder<ServiceContracts<T>, T>(this.entityApi, {
      ContractID: contractId
    });
  }

  /**
   * Returns a request builder for querying all `ServiceContracts` entities.
   * @returns A request builder for creating requests to retrieve all `ServiceContracts` entities.
   */
  getAll(): GetAllRequestBuilder<ServiceContracts<T>, T> {
    return new GetAllRequestBuilder<ServiceContracts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ServiceContracts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ServiceContracts`.
   */
  create(
    entity: ServiceContracts<T>
  ): CreateRequestBuilder<ServiceContracts<T>, T> {
    return new CreateRequestBuilder<ServiceContracts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ServiceContracts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ServiceContracts`.
   */
  update(
    entity: ServiceContracts<T>
  ): UpdateRequestBuilder<ServiceContracts<T>, T> {
    return new UpdateRequestBuilder<ServiceContracts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ServiceContracts`.
   * @param contractId Key property. See {@link ServiceContracts.contractId}.
   * @returns A request builder for creating requests that delete an entity of type `ServiceContracts`.
   */
  delete(contractId: number): DeleteRequestBuilder<ServiceContracts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ServiceContracts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ServiceContracts` by taking the entity as a parameter.
   */
  delete(
    entity: ServiceContracts<T>
  ): DeleteRequestBuilder<ServiceContracts<T>, T>;
  delete(
    contractIdOrEntity: any
  ): DeleteRequestBuilder<ServiceContracts<T>, T> {
    return new DeleteRequestBuilder<ServiceContracts<T>, T>(
      this.entityApi,
      contractIdOrEntity instanceof ServiceContracts
        ? contractIdOrEntity
        : { ContractID: contractIdOrEntity! }
    );
  }
}
