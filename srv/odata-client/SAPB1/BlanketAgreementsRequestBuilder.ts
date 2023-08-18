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
import { BlanketAgreements } from './BlanketAgreements';

/**
 * Request builder class for operations supported on the {@link BlanketAgreements} entity.
 */
export class BlanketAgreementsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BlanketAgreements<T>, T> {
  /**
   * Returns a request builder for retrieving one `BlanketAgreements` entity based on its keys.
   * @param agreementNo Key property. See {@link BlanketAgreements.agreementNo}.
   * @returns A request builder for creating requests to retrieve one `BlanketAgreements` entity based on its keys.
   */
  getByKey(
    agreementNo: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<BlanketAgreements<T>, T> {
    return new GetByKeyRequestBuilder<BlanketAgreements<T>, T>(this.entityApi, {
      AgreementNo: agreementNo
    });
  }

  /**
   * Returns a request builder for querying all `BlanketAgreements` entities.
   * @returns A request builder for creating requests to retrieve all `BlanketAgreements` entities.
   */
  getAll(): GetAllRequestBuilder<BlanketAgreements<T>, T> {
    return new GetAllRequestBuilder<BlanketAgreements<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BlanketAgreements` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BlanketAgreements`.
   */
  create(
    entity: BlanketAgreements<T>
  ): CreateRequestBuilder<BlanketAgreements<T>, T> {
    return new CreateRequestBuilder<BlanketAgreements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BlanketAgreements`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BlanketAgreements`.
   */
  update(
    entity: BlanketAgreements<T>
  ): UpdateRequestBuilder<BlanketAgreements<T>, T> {
    return new UpdateRequestBuilder<BlanketAgreements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BlanketAgreements`.
   * @param agreementNo Key property. See {@link BlanketAgreements.agreementNo}.
   * @returns A request builder for creating requests that delete an entity of type `BlanketAgreements`.
   */
  delete(agreementNo: number): DeleteRequestBuilder<BlanketAgreements<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BlanketAgreements`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BlanketAgreements` by taking the entity as a parameter.
   */
  delete(
    entity: BlanketAgreements<T>
  ): DeleteRequestBuilder<BlanketAgreements<T>, T>;
  delete(
    agreementNoOrEntity: any
  ): DeleteRequestBuilder<BlanketAgreements<T>, T> {
    return new DeleteRequestBuilder<BlanketAgreements<T>, T>(
      this.entityApi,
      agreementNoOrEntity instanceof BlanketAgreements
        ? agreementNoOrEntity
        : { AgreementNo: agreementNoOrEntity! }
    );
  }
}
