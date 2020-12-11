/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { BusinessPartnerGroups } from './BusinessPartnerGroups';

/**
 * Request builder class for operations supported on the [[BusinessPartnerGroups]] entity.
 */
export class BusinessPartnerGroupsRequestBuilder extends RequestBuilder<BusinessPartnerGroups> {
  /**
   * Returns a request builder for retrieving one `BusinessPartnerGroups` entity based on its keys.
   * @param code Key property. See [[BusinessPartnerGroups.code]].
   * @returns A request builder for creating requests to retrieve one `BusinessPartnerGroups` entity based on its keys.
   */
  getByKey(code: number): GetByKeyRequestBuilderV4<BusinessPartnerGroups> {
    return new GetByKeyRequestBuilderV4(BusinessPartnerGroups, { Code: code });
  }

  /**
   * Returns a request builder for querying all `BusinessPartnerGroups` entities.
   * @returns A request builder for creating requests to retrieve all `BusinessPartnerGroups` entities.
   */
  getAll(): GetAllRequestBuilderV4<BusinessPartnerGroups> {
    return new GetAllRequestBuilderV4(BusinessPartnerGroups);
  }

  /**
   * Returns a request builder for creating a `BusinessPartnerGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BusinessPartnerGroups`.
   */
  create(entity: BusinessPartnerGroups): CreateRequestBuilderV4<BusinessPartnerGroups> {
    return new CreateRequestBuilderV4(BusinessPartnerGroups, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `BusinessPartnerGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BusinessPartnerGroups`.
   */
  update(entity: BusinessPartnerGroups): UpdateRequestBuilderV4<BusinessPartnerGroups> {
    return new UpdateRequestBuilderV4(BusinessPartnerGroups, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BusinessPartnerGroups`.
   * @param code Key property. See [[BusinessPartnerGroups.code]].
   * @returns A request builder for creating requests that delete an entity of type `BusinessPartnerGroups`.
   */
  delete(code: number): DeleteRequestBuilderV4<BusinessPartnerGroups>;
  /**
   * Returns a request builder for deleting an entity of type `BusinessPartnerGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BusinessPartnerGroups` by taking the entity as a parameter.
   */
  delete(entity: BusinessPartnerGroups): DeleteRequestBuilderV4<BusinessPartnerGroups>;
  delete(codeOrEntity: any): DeleteRequestBuilderV4<BusinessPartnerGroups> {
    return new DeleteRequestBuilderV4(BusinessPartnerGroups, codeOrEntity instanceof BusinessPartnerGroups ? codeOrEntity : { Code: codeOrEntity! });
  }
}
