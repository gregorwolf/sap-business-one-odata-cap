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
import { ContractTemplates } from './ContractTemplates';

/**
 * Request builder class for operations supported on the {@link ContractTemplates} entity.
 */
export class ContractTemplatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ContractTemplates<T>, T> {
  /**
   * Returns a request builder for retrieving one `ContractTemplates` entity based on its keys.
   * @param templateName Key property. See {@link ContractTemplates.templateName}.
   * @returns A request builder for creating requests to retrieve one `ContractTemplates` entity based on its keys.
   */
  getByKey(
    templateName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ContractTemplates<T>, T> {
    return new GetByKeyRequestBuilder<ContractTemplates<T>, T>(this.entityApi, {
      TemplateName: templateName
    });
  }

  /**
   * Returns a request builder for querying all `ContractTemplates` entities.
   * @returns A request builder for creating requests to retrieve all `ContractTemplates` entities.
   */
  getAll(): GetAllRequestBuilder<ContractTemplates<T>, T> {
    return new GetAllRequestBuilder<ContractTemplates<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ContractTemplates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ContractTemplates`.
   */
  create(
    entity: ContractTemplates<T>
  ): CreateRequestBuilder<ContractTemplates<T>, T> {
    return new CreateRequestBuilder<ContractTemplates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ContractTemplates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ContractTemplates`.
   */
  update(
    entity: ContractTemplates<T>
  ): UpdateRequestBuilder<ContractTemplates<T>, T> {
    return new UpdateRequestBuilder<ContractTemplates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ContractTemplates`.
   * @param templateName Key property. See {@link ContractTemplates.templateName}.
   * @returns A request builder for creating requests that delete an entity of type `ContractTemplates`.
   */
  delete(templateName: string): DeleteRequestBuilder<ContractTemplates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ContractTemplates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ContractTemplates` by taking the entity as a parameter.
   */
  delete(
    entity: ContractTemplates<T>
  ): DeleteRequestBuilder<ContractTemplates<T>, T>;
  delete(
    templateNameOrEntity: any
  ): DeleteRequestBuilder<ContractTemplates<T>, T> {
    return new DeleteRequestBuilder<ContractTemplates<T>, T>(
      this.entityApi,
      templateNameOrEntity instanceof ContractTemplates
        ? templateNameOrEntity
        : { TemplateName: templateNameOrEntity! }
    );
  }
}
