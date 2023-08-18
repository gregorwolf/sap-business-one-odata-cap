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
import { MobileAddOnSetting } from './MobileAddOnSetting';

/**
 * Request builder class for operations supported on the {@link MobileAddOnSetting} entity.
 */
export class MobileAddOnSettingRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MobileAddOnSetting<T>, T> {
  /**
   * Returns a request builder for retrieving one `MobileAddOnSetting` entity based on its keys.
   * @param code Key property. See {@link MobileAddOnSetting.code}.
   * @returns A request builder for creating requests to retrieve one `MobileAddOnSetting` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<MobileAddOnSetting<T>, T> {
    return new GetByKeyRequestBuilder<MobileAddOnSetting<T>, T>(
      this.entityApi,
      { Code: code }
    );
  }

  /**
   * Returns a request builder for querying all `MobileAddOnSetting` entities.
   * @returns A request builder for creating requests to retrieve all `MobileAddOnSetting` entities.
   */
  getAll(): GetAllRequestBuilder<MobileAddOnSetting<T>, T> {
    return new GetAllRequestBuilder<MobileAddOnSetting<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `MobileAddOnSetting` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MobileAddOnSetting`.
   */
  create(
    entity: MobileAddOnSetting<T>
  ): CreateRequestBuilder<MobileAddOnSetting<T>, T> {
    return new CreateRequestBuilder<MobileAddOnSetting<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MobileAddOnSetting`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MobileAddOnSetting`.
   */
  update(
    entity: MobileAddOnSetting<T>
  ): UpdateRequestBuilder<MobileAddOnSetting<T>, T> {
    return new UpdateRequestBuilder<MobileAddOnSetting<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MobileAddOnSetting`.
   * @param code Key property. See {@link MobileAddOnSetting.code}.
   * @returns A request builder for creating requests that delete an entity of type `MobileAddOnSetting`.
   */
  delete(code: string): DeleteRequestBuilder<MobileAddOnSetting<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MobileAddOnSetting`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MobileAddOnSetting` by taking the entity as a parameter.
   */
  delete(
    entity: MobileAddOnSetting<T>
  ): DeleteRequestBuilder<MobileAddOnSetting<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<MobileAddOnSetting<T>, T> {
    return new DeleteRequestBuilder<MobileAddOnSetting<T>, T>(
      this.entityApi,
      codeOrEntity instanceof MobileAddOnSetting
        ? codeOrEntity
        : { Code: codeOrEntity! }
    );
  }
}
