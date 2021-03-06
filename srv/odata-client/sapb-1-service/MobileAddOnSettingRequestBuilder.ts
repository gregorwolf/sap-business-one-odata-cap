/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { MobileAddOnSetting } from './MobileAddOnSetting';

/**
 * Request builder class for operations supported on the [[MobileAddOnSetting]] entity.
 */
export class MobileAddOnSettingRequestBuilder extends RequestBuilder<MobileAddOnSetting> {
  /**
   * Returns a request builder for retrieving one `MobileAddOnSetting` entity based on its keys.
   * @param code Key property. See [[MobileAddOnSetting.code]].
   * @returns A request builder for creating requests to retrieve one `MobileAddOnSetting` entity based on its keys.
   */
  getByKey(code: string): GetByKeyRequestBuilderV4<MobileAddOnSetting> {
    return new GetByKeyRequestBuilderV4(MobileAddOnSetting, { Code: code });
  }

  /**
   * Returns a request builder for querying all `MobileAddOnSetting` entities.
   * @returns A request builder for creating requests to retrieve all `MobileAddOnSetting` entities.
   */
  getAll(): GetAllRequestBuilderV4<MobileAddOnSetting> {
    return new GetAllRequestBuilderV4(MobileAddOnSetting);
  }

  /**
   * Returns a request builder for creating a `MobileAddOnSetting` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MobileAddOnSetting`.
   */
  create(entity: MobileAddOnSetting): CreateRequestBuilderV4<MobileAddOnSetting> {
    return new CreateRequestBuilderV4(MobileAddOnSetting, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `MobileAddOnSetting`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MobileAddOnSetting`.
   */
  update(entity: MobileAddOnSetting): UpdateRequestBuilderV4<MobileAddOnSetting> {
    return new UpdateRequestBuilderV4(MobileAddOnSetting, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `MobileAddOnSetting`.
   * @param code Key property. See [[MobileAddOnSetting.code]].
   * @returns A request builder for creating requests that delete an entity of type `MobileAddOnSetting`.
   */
  delete(code: string): DeleteRequestBuilderV4<MobileAddOnSetting>;
  /**
   * Returns a request builder for deleting an entity of type `MobileAddOnSetting`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MobileAddOnSetting` by taking the entity as a parameter.
   */
  delete(entity: MobileAddOnSetting): DeleteRequestBuilderV4<MobileAddOnSetting>;
  delete(codeOrEntity: any): DeleteRequestBuilderV4<MobileAddOnSetting> {
    return new DeleteRequestBuilderV4(MobileAddOnSetting, codeOrEntity instanceof MobileAddOnSetting ? codeOrEntity : { Code: codeOrEntity! });
  }
}
