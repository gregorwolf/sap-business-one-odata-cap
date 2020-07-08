/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { EmailGroups } from './EmailGroups';

/**
 * Request builder class for operations supported on the [[EmailGroups]] entity.
 */
export class EmailGroupsRequestBuilder extends RequestBuilder<EmailGroups> {
  /**
   * Returns a request builder for retrieving one `EmailGroups` entity based on its keys.
   * @param emailGroupCode Key property. See [[EmailGroups.emailGroupCode]].
   * @returns A request builder for creating requests to retrieve one `EmailGroups` entity based on its keys.
   */
  getByKey(emailGroupCode: string): GetByKeyRequestBuilder<EmailGroups> {
    return new GetByKeyRequestBuilder(EmailGroups, { EmailGroupCode: emailGroupCode });
  }

  /**
   * Returns a request builder for querying all `EmailGroups` entities.
   * @returns A request builder for creating requests to retrieve all `EmailGroups` entities.
   */
  getAll(): GetAllRequestBuilder<EmailGroups> {
    return new GetAllRequestBuilder(EmailGroups);
  }

  /**
   * Returns a request builder for creating a `EmailGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EmailGroups`.
   */
  create(entity: EmailGroups): CreateRequestBuilder<EmailGroups> {
    return new CreateRequestBuilder(EmailGroups, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `EmailGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EmailGroups`.
   */
  update(entity: EmailGroups): UpdateRequestBuilder<EmailGroups> {
    return new UpdateRequestBuilder(EmailGroups, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `EmailGroups`.
   * @param emailGroupCode Key property. See [[EmailGroups.emailGroupCode]].
   * @returns A request builder for creating requests that delete an entity of type `EmailGroups`.
   */
  delete(emailGroupCode: string): DeleteRequestBuilder<EmailGroups>;
  /**
   * Returns a request builder for deleting an entity of type `EmailGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EmailGroups` by taking the entity as a parameter.
   */
  delete(entity: EmailGroups): DeleteRequestBuilder<EmailGroups>;
  delete(emailGroupCodeOrEntity: any): DeleteRequestBuilder<EmailGroups> {
    return new DeleteRequestBuilder(EmailGroups, emailGroupCodeOrEntity instanceof EmailGroups ? emailGroupCodeOrEntity : { EmailGroupCode: emailGroupCodeOrEntity! });
  }
}
