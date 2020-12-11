/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { ContractTemplates } from './ContractTemplates';

/**
 * Request builder class for operations supported on the [[ContractTemplates]] entity.
 */
export class ContractTemplatesRequestBuilder extends RequestBuilder<ContractTemplates> {
  /**
   * Returns a request builder for retrieving one `ContractTemplates` entity based on its keys.
   * @param templateName Key property. See [[ContractTemplates.templateName]].
   * @returns A request builder for creating requests to retrieve one `ContractTemplates` entity based on its keys.
   */
  getByKey(templateName: string): GetByKeyRequestBuilderV4<ContractTemplates> {
    return new GetByKeyRequestBuilderV4(ContractTemplates, { TemplateName: templateName });
  }

  /**
   * Returns a request builder for querying all `ContractTemplates` entities.
   * @returns A request builder for creating requests to retrieve all `ContractTemplates` entities.
   */
  getAll(): GetAllRequestBuilderV4<ContractTemplates> {
    return new GetAllRequestBuilderV4(ContractTemplates);
  }

  /**
   * Returns a request builder for creating a `ContractTemplates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ContractTemplates`.
   */
  create(entity: ContractTemplates): CreateRequestBuilderV4<ContractTemplates> {
    return new CreateRequestBuilderV4(ContractTemplates, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `ContractTemplates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ContractTemplates`.
   */
  update(entity: ContractTemplates): UpdateRequestBuilderV4<ContractTemplates> {
    return new UpdateRequestBuilderV4(ContractTemplates, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ContractTemplates`.
   * @param templateName Key property. See [[ContractTemplates.templateName]].
   * @returns A request builder for creating requests that delete an entity of type `ContractTemplates`.
   */
  delete(templateName: string): DeleteRequestBuilderV4<ContractTemplates>;
  /**
   * Returns a request builder for deleting an entity of type `ContractTemplates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ContractTemplates` by taking the entity as a parameter.
   */
  delete(entity: ContractTemplates): DeleteRequestBuilderV4<ContractTemplates>;
  delete(templateNameOrEntity: any): DeleteRequestBuilderV4<ContractTemplates> {
    return new DeleteRequestBuilderV4(ContractTemplates, templateNameOrEntity instanceof ContractTemplates ? templateNameOrEntity : { TemplateName: templateNameOrEntity! });
  }
}
