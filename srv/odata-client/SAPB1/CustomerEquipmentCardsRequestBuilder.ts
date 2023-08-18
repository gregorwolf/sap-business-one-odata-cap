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
import { CustomerEquipmentCards } from './CustomerEquipmentCards';

/**
 * Request builder class for operations supported on the {@link CustomerEquipmentCards} entity.
 */
export class CustomerEquipmentCardsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomerEquipmentCards<T>, T> {
  /**
   * Returns a request builder for retrieving one `CustomerEquipmentCards` entity based on its keys.
   * @param equipmentCardNum Key property. See {@link CustomerEquipmentCards.equipmentCardNum}.
   * @returns A request builder for creating requests to retrieve one `CustomerEquipmentCards` entity based on its keys.
   */
  getByKey(
    equipmentCardNum: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<CustomerEquipmentCards<T>, T> {
    return new GetByKeyRequestBuilder<CustomerEquipmentCards<T>, T>(
      this.entityApi,
      { EquipmentCardNum: equipmentCardNum }
    );
  }

  /**
   * Returns a request builder for querying all `CustomerEquipmentCards` entities.
   * @returns A request builder for creating requests to retrieve all `CustomerEquipmentCards` entities.
   */
  getAll(): GetAllRequestBuilder<CustomerEquipmentCards<T>, T> {
    return new GetAllRequestBuilder<CustomerEquipmentCards<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CustomerEquipmentCards` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomerEquipmentCards`.
   */
  create(
    entity: CustomerEquipmentCards<T>
  ): CreateRequestBuilder<CustomerEquipmentCards<T>, T> {
    return new CreateRequestBuilder<CustomerEquipmentCards<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CustomerEquipmentCards`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomerEquipmentCards`.
   */
  update(
    entity: CustomerEquipmentCards<T>
  ): UpdateRequestBuilder<CustomerEquipmentCards<T>, T> {
    return new UpdateRequestBuilder<CustomerEquipmentCards<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomerEquipmentCards`.
   * @param equipmentCardNum Key property. See {@link CustomerEquipmentCards.equipmentCardNum}.
   * @returns A request builder for creating requests that delete an entity of type `CustomerEquipmentCards`.
   */
  delete(
    equipmentCardNum: number
  ): DeleteRequestBuilder<CustomerEquipmentCards<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomerEquipmentCards`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomerEquipmentCards` by taking the entity as a parameter.
   */
  delete(
    entity: CustomerEquipmentCards<T>
  ): DeleteRequestBuilder<CustomerEquipmentCards<T>, T>;
  delete(
    equipmentCardNumOrEntity: any
  ): DeleteRequestBuilder<CustomerEquipmentCards<T>, T> {
    return new DeleteRequestBuilder<CustomerEquipmentCards<T>, T>(
      this.entityApi,
      equipmentCardNumOrEntity instanceof CustomerEquipmentCards
        ? equipmentCardNumOrEntity
        : { EquipmentCardNum: equipmentCardNumOrEntity! }
    );
  }
}
