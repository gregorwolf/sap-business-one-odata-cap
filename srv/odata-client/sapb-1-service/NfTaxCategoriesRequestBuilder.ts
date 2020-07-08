/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { NfTaxCategories } from './NfTaxCategories';

/**
 * Request builder class for operations supported on the [[NfTaxCategories]] entity.
 */
export class NfTaxCategoriesRequestBuilder extends RequestBuilder<NfTaxCategories> {
  /**
   * Returns a request builder for retrieving one `NfTaxCategories` entity based on its keys.
   * @param absId Key property. See [[NfTaxCategories.absId]].
   * @returns A request builder for creating requests to retrieve one `NfTaxCategories` entity based on its keys.
   */
  getByKey(absId: number): GetByKeyRequestBuilder<NfTaxCategories> {
    return new GetByKeyRequestBuilder(NfTaxCategories, { AbsId: absId });
  }

  /**
   * Returns a request builder for querying all `NfTaxCategories` entities.
   * @returns A request builder for creating requests to retrieve all `NfTaxCategories` entities.
   */
  getAll(): GetAllRequestBuilder<NfTaxCategories> {
    return new GetAllRequestBuilder(NfTaxCategories);
  }

  /**
   * Returns a request builder for creating a `NfTaxCategories` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `NfTaxCategories`.
   */
  create(entity: NfTaxCategories): CreateRequestBuilder<NfTaxCategories> {
    return new CreateRequestBuilder(NfTaxCategories, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `NfTaxCategories`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `NfTaxCategories`.
   */
  update(entity: NfTaxCategories): UpdateRequestBuilder<NfTaxCategories> {
    return new UpdateRequestBuilder(NfTaxCategories, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `NfTaxCategories`.
   * @param absId Key property. See [[NfTaxCategories.absId]].
   * @returns A request builder for creating requests that delete an entity of type `NfTaxCategories`.
   */
  delete(absId: number): DeleteRequestBuilder<NfTaxCategories>;
  /**
   * Returns a request builder for deleting an entity of type `NfTaxCategories`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `NfTaxCategories` by taking the entity as a parameter.
   */
  delete(entity: NfTaxCategories): DeleteRequestBuilder<NfTaxCategories>;
  delete(absIdOrEntity: any): DeleteRequestBuilder<NfTaxCategories> {
    return new DeleteRequestBuilder(NfTaxCategories, absIdOrEntity instanceof NfTaxCategories ? absIdOrEntity : { AbsId: absIdOrEntity! });
  }
}
