/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { CustomsDeclaration } from './CustomsDeclaration';

/**
 * Request builder class for operations supported on the [[CustomsDeclaration]] entity.
 */
export class CustomsDeclarationRequestBuilder extends RequestBuilder<CustomsDeclaration> {
  /**
   * Returns a request builder for retrieving one `CustomsDeclaration` entity based on its keys.
   * @param ccdNum Key property. See [[CustomsDeclaration.ccdNum]].
   * @returns A request builder for creating requests to retrieve one `CustomsDeclaration` entity based on its keys.
   */
  getByKey(ccdNum: string): GetByKeyRequestBuilder<CustomsDeclaration> {
    return new GetByKeyRequestBuilder(CustomsDeclaration, { CCDNum: ccdNum });
  }

  /**
   * Returns a request builder for querying all `CustomsDeclaration` entities.
   * @returns A request builder for creating requests to retrieve all `CustomsDeclaration` entities.
   */
  getAll(): GetAllRequestBuilder<CustomsDeclaration> {
    return new GetAllRequestBuilder(CustomsDeclaration);
  }

  /**
   * Returns a request builder for creating a `CustomsDeclaration` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomsDeclaration`.
   */
  create(entity: CustomsDeclaration): CreateRequestBuilder<CustomsDeclaration> {
    return new CreateRequestBuilder(CustomsDeclaration, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `CustomsDeclaration`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomsDeclaration`.
   */
  update(entity: CustomsDeclaration): UpdateRequestBuilder<CustomsDeclaration> {
    return new UpdateRequestBuilder(CustomsDeclaration, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomsDeclaration`.
   * @param ccdNum Key property. See [[CustomsDeclaration.ccdNum]].
   * @returns A request builder for creating requests that delete an entity of type `CustomsDeclaration`.
   */
  delete(ccdNum: string): DeleteRequestBuilder<CustomsDeclaration>;
  /**
   * Returns a request builder for deleting an entity of type `CustomsDeclaration`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomsDeclaration` by taking the entity as a parameter.
   */
  delete(entity: CustomsDeclaration): DeleteRequestBuilder<CustomsDeclaration>;
  delete(ccdNumOrEntity: any): DeleteRequestBuilder<CustomsDeclaration> {
    return new DeleteRequestBuilder(CustomsDeclaration, ccdNumOrEntity instanceof CustomsDeclaration ? ccdNumOrEntity : { CCDNum: ccdNumOrEntity! });
  }
}
