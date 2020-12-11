/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
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
  getByKey(ccdNum: string): GetByKeyRequestBuilderV4<CustomsDeclaration> {
    return new GetByKeyRequestBuilderV4(CustomsDeclaration, { CCDNum: ccdNum });
  }

  /**
   * Returns a request builder for querying all `CustomsDeclaration` entities.
   * @returns A request builder for creating requests to retrieve all `CustomsDeclaration` entities.
   */
  getAll(): GetAllRequestBuilderV4<CustomsDeclaration> {
    return new GetAllRequestBuilderV4(CustomsDeclaration);
  }

  /**
   * Returns a request builder for creating a `CustomsDeclaration` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomsDeclaration`.
   */
  create(entity: CustomsDeclaration): CreateRequestBuilderV4<CustomsDeclaration> {
    return new CreateRequestBuilderV4(CustomsDeclaration, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `CustomsDeclaration`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomsDeclaration`.
   */
  update(entity: CustomsDeclaration): UpdateRequestBuilderV4<CustomsDeclaration> {
    return new UpdateRequestBuilderV4(CustomsDeclaration, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomsDeclaration`.
   * @param ccdNum Key property. See [[CustomsDeclaration.ccdNum]].
   * @returns A request builder for creating requests that delete an entity of type `CustomsDeclaration`.
   */
  delete(ccdNum: string): DeleteRequestBuilderV4<CustomsDeclaration>;
  /**
   * Returns a request builder for deleting an entity of type `CustomsDeclaration`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomsDeclaration` by taking the entity as a parameter.
   */
  delete(entity: CustomsDeclaration): DeleteRequestBuilderV4<CustomsDeclaration>;
  delete(ccdNumOrEntity: any): DeleteRequestBuilderV4<CustomsDeclaration> {
    return new DeleteRequestBuilderV4(CustomsDeclaration, ccdNumOrEntity instanceof CustomsDeclaration ? ccdNumOrEntity : { CCDNum: ccdNumOrEntity! });
  }
}
