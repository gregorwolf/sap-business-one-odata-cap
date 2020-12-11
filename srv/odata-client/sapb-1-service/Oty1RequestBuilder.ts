/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { Oty1 } from './Oty1';

/**
 * Request builder class for operations supported on the [[Oty1]] entity.
 */
export class Oty1RequestBuilder extends RequestBuilder<Oty1> {
  /**
   * Returns a request builder for retrieving one `Oty1` entity based on its keys.
   * @param code Key property. See [[Oty1.code]].
   * @returns A request builder for creating requests to retrieve one `Oty1` entity based on its keys.
   */
  getByKey(code: string): GetByKeyRequestBuilderV4<Oty1> {
    return new GetByKeyRequestBuilderV4(Oty1, { Code: code });
  }

  /**
   * Returns a request builder for querying all `Oty1` entities.
   * @returns A request builder for creating requests to retrieve all `Oty1` entities.
   */
  getAll(): GetAllRequestBuilderV4<Oty1> {
    return new GetAllRequestBuilderV4(Oty1);
  }

  /**
   * Returns a request builder for creating a `Oty1` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Oty1`.
   */
  create(entity: Oty1): CreateRequestBuilderV4<Oty1> {
    return new CreateRequestBuilderV4(Oty1, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Oty1`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Oty1`.
   */
  update(entity: Oty1): UpdateRequestBuilderV4<Oty1> {
    return new UpdateRequestBuilderV4(Oty1, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Oty1`.
   * @param code Key property. See [[Oty1.code]].
   * @returns A request builder for creating requests that delete an entity of type `Oty1`.
   */
  delete(code: string): DeleteRequestBuilderV4<Oty1>;
  /**
   * Returns a request builder for deleting an entity of type `Oty1`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Oty1` by taking the entity as a parameter.
   */
  delete(entity: Oty1): DeleteRequestBuilderV4<Oty1>;
  delete(codeOrEntity: any): DeleteRequestBuilderV4<Oty1> {
    return new DeleteRequestBuilderV4(Oty1, codeOrEntity instanceof Oty1 ? codeOrEntity : { Code: codeOrEntity! });
  }
}
