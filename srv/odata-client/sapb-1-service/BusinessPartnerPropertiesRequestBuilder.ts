/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { BusinessPartnerProperties } from './BusinessPartnerProperties';

/**
 * Request builder class for operations supported on the [[BusinessPartnerProperties]] entity.
 */
export class BusinessPartnerPropertiesRequestBuilder extends RequestBuilder<BusinessPartnerProperties> {
  /**
   * Returns a request builder for retrieving one `BusinessPartnerProperties` entity based on its keys.
   * @param propertyCode Key property. See [[BusinessPartnerProperties.propertyCode]].
   * @returns A request builder for creating requests to retrieve one `BusinessPartnerProperties` entity based on its keys.
   */
  getByKey(propertyCode: number): GetByKeyRequestBuilderV4<BusinessPartnerProperties> {
    return new GetByKeyRequestBuilderV4(BusinessPartnerProperties, { PropertyCode: propertyCode });
  }

  /**
   * Returns a request builder for querying all `BusinessPartnerProperties` entities.
   * @returns A request builder for creating requests to retrieve all `BusinessPartnerProperties` entities.
   */
  getAll(): GetAllRequestBuilderV4<BusinessPartnerProperties> {
    return new GetAllRequestBuilderV4(BusinessPartnerProperties);
  }

  /**
   * Returns a request builder for creating a `BusinessPartnerProperties` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BusinessPartnerProperties`.
   */
  create(entity: BusinessPartnerProperties): CreateRequestBuilderV4<BusinessPartnerProperties> {
    return new CreateRequestBuilderV4(BusinessPartnerProperties, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `BusinessPartnerProperties`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BusinessPartnerProperties`.
   */
  update(entity: BusinessPartnerProperties): UpdateRequestBuilderV4<BusinessPartnerProperties> {
    return new UpdateRequestBuilderV4(BusinessPartnerProperties, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BusinessPartnerProperties`.
   * @param propertyCode Key property. See [[BusinessPartnerProperties.propertyCode]].
   * @returns A request builder for creating requests that delete an entity of type `BusinessPartnerProperties`.
   */
  delete(propertyCode: number): DeleteRequestBuilderV4<BusinessPartnerProperties>;
  /**
   * Returns a request builder for deleting an entity of type `BusinessPartnerProperties`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BusinessPartnerProperties` by taking the entity as a parameter.
   */
  delete(entity: BusinessPartnerProperties): DeleteRequestBuilderV4<BusinessPartnerProperties>;
  delete(propertyCodeOrEntity: any): DeleteRequestBuilderV4<BusinessPartnerProperties> {
    return new DeleteRequestBuilderV4(BusinessPartnerProperties, propertyCodeOrEntity instanceof BusinessPartnerProperties ? propertyCodeOrEntity : { PropertyCode: propertyCodeOrEntity! });
  }
}
