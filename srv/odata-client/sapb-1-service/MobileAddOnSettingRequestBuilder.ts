/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
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
  getByKey(code: string): GetByKeyRequestBuilder<MobileAddOnSetting> {
    return new GetByKeyRequestBuilder(MobileAddOnSetting, { Code: code });
  }

  /**
   * Returns a request builder for querying all `MobileAddOnSetting` entities.
   * @returns A request builder for creating requests to retrieve all `MobileAddOnSetting` entities.
   */
  getAll(): GetAllRequestBuilder<MobileAddOnSetting> {
    return new GetAllRequestBuilder(MobileAddOnSetting);
  }

  /**
   * Returns a request builder for creating a `MobileAddOnSetting` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MobileAddOnSetting`.
   */
  create(entity: MobileAddOnSetting): CreateRequestBuilder<MobileAddOnSetting> {
    return new CreateRequestBuilder(MobileAddOnSetting, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `MobileAddOnSetting`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MobileAddOnSetting`.
   */
  update(entity: MobileAddOnSetting): UpdateRequestBuilder<MobileAddOnSetting> {
    return new UpdateRequestBuilder(MobileAddOnSetting, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `MobileAddOnSetting`.
   * @param code Key property. See [[MobileAddOnSetting.code]].
   * @returns A request builder for creating requests that delete an entity of type `MobileAddOnSetting`.
   */
  delete(code: string): DeleteRequestBuilder<MobileAddOnSetting>;
  /**
   * Returns a request builder for deleting an entity of type `MobileAddOnSetting`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MobileAddOnSetting` by taking the entity as a parameter.
   */
  delete(entity: MobileAddOnSetting): DeleteRequestBuilder<MobileAddOnSetting>;
  delete(codeOrEntity: any): DeleteRequestBuilder<MobileAddOnSetting> {
    return new DeleteRequestBuilder(MobileAddOnSetting, codeOrEntity instanceof MobileAddOnSetting ? codeOrEntity : { Code: codeOrEntity! });
  }
}
