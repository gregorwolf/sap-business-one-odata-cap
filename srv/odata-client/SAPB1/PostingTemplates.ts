/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import { PostingTemplatesLine } from './PostingTemplatesLine';
import type { PostingTemplatesApi } from './PostingTemplatesApi';
import { BoYesNoEnum } from './BoYesNoEnum';

/**
 * This class represents the entity "PostingTemplates" of service "SAPB1".
 */
export class PostingTemplates<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PostingTemplatesType<T>
{
  /**
   * Technical entity name for PostingTemplates.
   */
  static _entityName = 'PostingTemplates';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the PostingTemplates entity
   */
  static _keys = ['Code'];
  /**
   * Code.
   */
  code!: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Stamp Tax.
   * @nullable
   */
  stampTax?: BoYesNoEnum | null;
  /**
   * Automatic Vat.
   * @nullable
   */
  automaticVat?: BoYesNoEnum | null;
  /**
   * Manage W Tax.
   * @nullable
   */
  manageWTax?: BoYesNoEnum | null;
  /**
   * Deferred Tax.
   * @nullable
   */
  deferredTax?: BoYesNoEnum | null;
  /**
   * Posting Templates Line Collection.
   * @nullable
   */
  postingTemplatesLineCollection?: PostingTemplatesLine<T>[] | null;

  constructor(readonly _entityApi: PostingTemplatesApi<T>) {
    super(_entityApi);
  }
}

export interface PostingTemplatesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  stampTax?: BoYesNoEnum | null;
  automaticVat?: BoYesNoEnum | null;
  manageWTax?: BoYesNoEnum | null;
  deferredTax?: BoYesNoEnum | null;
  postingTemplatesLineCollection?: PostingTemplatesLine<T>[] | null;
}
