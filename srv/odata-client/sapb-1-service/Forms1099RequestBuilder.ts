/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { Forms1099 } from './Forms1099';

/**
 * Request builder class for operations supported on the [[Forms1099]] entity.
 */
export class Forms1099RequestBuilder extends RequestBuilder<Forms1099> {
  /**
   * Returns a request builder for retrieving one `Forms1099` entity based on its keys.
   * @param formCode Key property. See [[Forms1099.formCode]].
   * @returns A request builder for creating requests to retrieve one `Forms1099` entity based on its keys.
   */
  getByKey(formCode: number): GetByKeyRequestBuilder<Forms1099> {
    return new GetByKeyRequestBuilder(Forms1099, { FormCode: formCode });
  }

  /**
   * Returns a request builder for querying all `Forms1099` entities.
   * @returns A request builder for creating requests to retrieve all `Forms1099` entities.
   */
  getAll(): GetAllRequestBuilder<Forms1099> {
    return new GetAllRequestBuilder(Forms1099);
  }

  /**
   * Returns a request builder for creating a `Forms1099` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Forms1099`.
   */
  create(entity: Forms1099): CreateRequestBuilder<Forms1099> {
    return new CreateRequestBuilder(Forms1099, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Forms1099`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Forms1099`.
   */
  update(entity: Forms1099): UpdateRequestBuilder<Forms1099> {
    return new UpdateRequestBuilder(Forms1099, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Forms1099`.
   * @param formCode Key property. See [[Forms1099.formCode]].
   * @returns A request builder for creating requests that delete an entity of type `Forms1099`.
   */
  delete(formCode: number): DeleteRequestBuilder<Forms1099>;
  /**
   * Returns a request builder for deleting an entity of type `Forms1099`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Forms1099` by taking the entity as a parameter.
   */
  delete(entity: Forms1099): DeleteRequestBuilder<Forms1099>;
  delete(formCodeOrEntity: any): DeleteRequestBuilder<Forms1099> {
    return new DeleteRequestBuilder(Forms1099, formCodeOrEntity instanceof Forms1099 ? formCodeOrEntity : { FormCode: formCodeOrEntity! });
  }
}
