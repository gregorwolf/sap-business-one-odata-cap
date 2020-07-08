/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
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
  getByKey(templateName: string): GetByKeyRequestBuilder<ContractTemplates> {
    return new GetByKeyRequestBuilder(ContractTemplates, { TemplateName: templateName });
  }

  /**
   * Returns a request builder for querying all `ContractTemplates` entities.
   * @returns A request builder for creating requests to retrieve all `ContractTemplates` entities.
   */
  getAll(): GetAllRequestBuilder<ContractTemplates> {
    return new GetAllRequestBuilder(ContractTemplates);
  }

  /**
   * Returns a request builder for creating a `ContractTemplates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ContractTemplates`.
   */
  create(entity: ContractTemplates): CreateRequestBuilder<ContractTemplates> {
    return new CreateRequestBuilder(ContractTemplates, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `ContractTemplates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ContractTemplates`.
   */
  update(entity: ContractTemplates): UpdateRequestBuilder<ContractTemplates> {
    return new UpdateRequestBuilder(ContractTemplates, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ContractTemplates`.
   * @param templateName Key property. See [[ContractTemplates.templateName]].
   * @returns A request builder for creating requests that delete an entity of type `ContractTemplates`.
   */
  delete(templateName: string): DeleteRequestBuilder<ContractTemplates>;
  /**
   * Returns a request builder for deleting an entity of type `ContractTemplates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ContractTemplates` by taking the entity as a parameter.
   */
  delete(entity: ContractTemplates): DeleteRequestBuilder<ContractTemplates>;
  delete(templateNameOrEntity: any): DeleteRequestBuilder<ContractTemplates> {
    return new DeleteRequestBuilder(ContractTemplates, templateNameOrEntity instanceof ContractTemplates ? templateNameOrEntity : { TemplateName: templateNameOrEntity! });
  }
}
