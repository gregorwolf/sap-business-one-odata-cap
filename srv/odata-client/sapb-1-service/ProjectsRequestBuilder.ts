/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { Projects } from './Projects';

/**
 * Request builder class for operations supported on the [[Projects]] entity.
 */
export class ProjectsRequestBuilder extends RequestBuilder<Projects> {
  /**
   * Returns a request builder for retrieving one `Projects` entity based on its keys.
   * @param code Key property. See [[Projects.code]].
   * @returns A request builder for creating requests to retrieve one `Projects` entity based on its keys.
   */
  getByKey(code: string): GetByKeyRequestBuilderV4<Projects> {
    return new GetByKeyRequestBuilderV4(Projects, { Code: code });
  }

  /**
   * Returns a request builder for querying all `Projects` entities.
   * @returns A request builder for creating requests to retrieve all `Projects` entities.
   */
  getAll(): GetAllRequestBuilderV4<Projects> {
    return new GetAllRequestBuilderV4(Projects);
  }

  /**
   * Returns a request builder for creating a `Projects` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Projects`.
   */
  create(entity: Projects): CreateRequestBuilderV4<Projects> {
    return new CreateRequestBuilderV4(Projects, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Projects`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Projects`.
   */
  update(entity: Projects): UpdateRequestBuilderV4<Projects> {
    return new UpdateRequestBuilderV4(Projects, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Projects`.
   * @param code Key property. See [[Projects.code]].
   * @returns A request builder for creating requests that delete an entity of type `Projects`.
   */
  delete(code: string): DeleteRequestBuilderV4<Projects>;
  /**
   * Returns a request builder for deleting an entity of type `Projects`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Projects` by taking the entity as a parameter.
   */
  delete(entity: Projects): DeleteRequestBuilderV4<Projects>;
  delete(codeOrEntity: any): DeleteRequestBuilderV4<Projects> {
    return new DeleteRequestBuilderV4(Projects, codeOrEntity instanceof Projects ? codeOrEntity : { Code: codeOrEntity! });
  }
}
