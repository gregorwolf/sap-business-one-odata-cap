/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { BusinessPartners } from './BusinessPartners';

/**
 * Request builder class for operations supported on the [[BusinessPartners]] entity.
 */
export class BusinessPartnersRequestBuilder extends RequestBuilder<BusinessPartners> {
  /**
   * Returns a request builder for retrieving one `BusinessPartners` entity based on its keys.
   * @param cardCode Key property. See [[BusinessPartners.cardCode]].
   * @returns A request builder for creating requests to retrieve one `BusinessPartners` entity based on its keys.
   */
  getByKey(cardCode: string): GetByKeyRequestBuilderV4<BusinessPartners> {
    return new GetByKeyRequestBuilderV4(BusinessPartners, { CardCode: cardCode });
  }

  /**
   * Returns a request builder for querying all `BusinessPartners` entities.
   * @returns A request builder for creating requests to retrieve all `BusinessPartners` entities.
   */
  getAll(): GetAllRequestBuilderV4<BusinessPartners> {
    return new GetAllRequestBuilderV4(BusinessPartners);
  }

  /**
   * Returns a request builder for creating a `BusinessPartners` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BusinessPartners`.
   */
  create(entity: BusinessPartners): CreateRequestBuilderV4<BusinessPartners> {
    return new CreateRequestBuilderV4(BusinessPartners, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `BusinessPartners`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BusinessPartners`.
   */
  update(entity: BusinessPartners): UpdateRequestBuilderV4<BusinessPartners> {
    return new UpdateRequestBuilderV4(BusinessPartners, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BusinessPartners`.
   * @param cardCode Key property. See [[BusinessPartners.cardCode]].
   * @returns A request builder for creating requests that delete an entity of type `BusinessPartners`.
   */
  delete(cardCode: string): DeleteRequestBuilderV4<BusinessPartners>;
  /**
   * Returns a request builder for deleting an entity of type `BusinessPartners`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BusinessPartners` by taking the entity as a parameter.
   */
  delete(entity: BusinessPartners): DeleteRequestBuilderV4<BusinessPartners>;
  delete(cardCodeOrEntity: any): DeleteRequestBuilderV4<BusinessPartners> {
    return new DeleteRequestBuilderV4(BusinessPartners, cardCodeOrEntity instanceof BusinessPartners ? cardCodeOrEntity : { CardCode: cardCodeOrEntity! });
  }
}
