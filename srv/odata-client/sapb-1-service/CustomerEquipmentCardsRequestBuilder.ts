/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { CustomerEquipmentCards } from './CustomerEquipmentCards';

/**
 * Request builder class for operations supported on the [[CustomerEquipmentCards]] entity.
 */
export class CustomerEquipmentCardsRequestBuilder extends RequestBuilder<CustomerEquipmentCards> {
  /**
   * Returns a request builder for retrieving one `CustomerEquipmentCards` entity based on its keys.
   * @param equipmentCardNum Key property. See [[CustomerEquipmentCards.equipmentCardNum]].
   * @returns A request builder for creating requests to retrieve one `CustomerEquipmentCards` entity based on its keys.
   */
  getByKey(equipmentCardNum: number): GetByKeyRequestBuilderV4<CustomerEquipmentCards> {
    return new GetByKeyRequestBuilderV4(CustomerEquipmentCards, { EquipmentCardNum: equipmentCardNum });
  }

  /**
   * Returns a request builder for querying all `CustomerEquipmentCards` entities.
   * @returns A request builder for creating requests to retrieve all `CustomerEquipmentCards` entities.
   */
  getAll(): GetAllRequestBuilderV4<CustomerEquipmentCards> {
    return new GetAllRequestBuilderV4(CustomerEquipmentCards);
  }

  /**
   * Returns a request builder for creating a `CustomerEquipmentCards` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomerEquipmentCards`.
   */
  create(entity: CustomerEquipmentCards): CreateRequestBuilderV4<CustomerEquipmentCards> {
    return new CreateRequestBuilderV4(CustomerEquipmentCards, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `CustomerEquipmentCards`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomerEquipmentCards`.
   */
  update(entity: CustomerEquipmentCards): UpdateRequestBuilderV4<CustomerEquipmentCards> {
    return new UpdateRequestBuilderV4(CustomerEquipmentCards, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomerEquipmentCards`.
   * @param equipmentCardNum Key property. See [[CustomerEquipmentCards.equipmentCardNum]].
   * @returns A request builder for creating requests that delete an entity of type `CustomerEquipmentCards`.
   */
  delete(equipmentCardNum: number): DeleteRequestBuilderV4<CustomerEquipmentCards>;
  /**
   * Returns a request builder for deleting an entity of type `CustomerEquipmentCards`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomerEquipmentCards` by taking the entity as a parameter.
   */
  delete(entity: CustomerEquipmentCards): DeleteRequestBuilderV4<CustomerEquipmentCards>;
  delete(equipmentCardNumOrEntity: any): DeleteRequestBuilderV4<CustomerEquipmentCards> {
    return new DeleteRequestBuilderV4(CustomerEquipmentCards, equipmentCardNumOrEntity instanceof CustomerEquipmentCards ? equipmentCardNumOrEntity : { EquipmentCardNum: equipmentCardNumOrEntity! });
  }
}
