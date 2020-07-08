/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { AlternateCatNum } from './AlternateCatNum';

/**
 * Request builder class for operations supported on the [[AlternateCatNum]] entity.
 */
export class AlternateCatNumRequestBuilder extends RequestBuilder<AlternateCatNum> {
  /**
   * Returns a request builder for retrieving one `AlternateCatNum` entity based on its keys.
   * @param itemCode Key property. See [[AlternateCatNum.itemCode]].
   * @param cardCode Key property. See [[AlternateCatNum.cardCode]].
   * @param substitute Key property. See [[AlternateCatNum.substitute]].
   * @returns A request builder for creating requests to retrieve one `AlternateCatNum` entity based on its keys.
   */
  getByKey(itemCode: string, cardCode: string, substitute: string): GetByKeyRequestBuilder<AlternateCatNum> {
    return new GetByKeyRequestBuilder(AlternateCatNum, {
      ItemCode: itemCode,
      CardCode: cardCode,
      Substitute: substitute
    });
  }

  /**
   * Returns a request builder for querying all `AlternateCatNum` entities.
   * @returns A request builder for creating requests to retrieve all `AlternateCatNum` entities.
   */
  getAll(): GetAllRequestBuilder<AlternateCatNum> {
    return new GetAllRequestBuilder(AlternateCatNum);
  }

  /**
   * Returns a request builder for creating a `AlternateCatNum` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AlternateCatNum`.
   */
  create(entity: AlternateCatNum): CreateRequestBuilder<AlternateCatNum> {
    return new CreateRequestBuilder(AlternateCatNum, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `AlternateCatNum`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AlternateCatNum`.
   */
  update(entity: AlternateCatNum): UpdateRequestBuilder<AlternateCatNum> {
    return new UpdateRequestBuilder(AlternateCatNum, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AlternateCatNum`.
   * @param itemCode Key property. See [[AlternateCatNum.itemCode]].
   * @param cardCode Key property. See [[AlternateCatNum.cardCode]].
   * @param substitute Key property. See [[AlternateCatNum.substitute]].
   * @returns A request builder for creating requests that delete an entity of type `AlternateCatNum`.
   */
  delete(itemCode: string, cardCode: string, substitute: string): DeleteRequestBuilder<AlternateCatNum>;
  /**
   * Returns a request builder for deleting an entity of type `AlternateCatNum`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AlternateCatNum` by taking the entity as a parameter.
   */
  delete(entity: AlternateCatNum): DeleteRequestBuilder<AlternateCatNum>;
  delete(itemCodeOrEntity: any, cardCode?: string, substitute?: string): DeleteRequestBuilder<AlternateCatNum> {
    return new DeleteRequestBuilder(AlternateCatNum, itemCodeOrEntity instanceof AlternateCatNum ? itemCodeOrEntity : {
      ItemCode: itemCodeOrEntity!,
      CardCode: cardCode!,
      Substitute: substitute!
    });
  }
}
