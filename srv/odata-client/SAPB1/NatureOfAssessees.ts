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
import type { NatureOfAssesseesApi } from './NatureOfAssesseesApi';
import { AssesseeTypeEnum } from './AssesseeTypeEnum';
import {
  WithholdingTaxCodes,
  WithholdingTaxCodesType
} from './WithholdingTaxCodes';

/**
 * This class represents the entity "NatureOfAssessees" of service "SAPB1".
 */
export class NatureOfAssessees<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements NatureOfAssesseesType<T>
{
  /**
   * Technical entity name for NatureOfAssessees.
   */
  static _entityName = 'NatureOfAssessees';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the NatureOfAssessees entity
   */
  static _keys = ['AbsEntry'];
  /**
   * Abs Entry.
   */
  absEntry!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Code.
   * @nullable
   */
  code?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Assessee Type.
   * @nullable
   */
  assesseeType?: AssesseeTypeEnum | null;
  /**
   * One-to-many navigation property to the {@link WithholdingTaxCodes} entity.
   */
  withholdingTaxCodes!: WithholdingTaxCodes<T>[];

  constructor(readonly _entityApi: NatureOfAssesseesApi<T>) {
    super(_entityApi);
  }
}

export interface NatureOfAssesseesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  absEntry: DeserializedType<T, 'Edm.Int32'>;
  code?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  assesseeType?: AssesseeTypeEnum | null;
  withholdingTaxCodes: WithholdingTaxCodesType<T>[];
}
