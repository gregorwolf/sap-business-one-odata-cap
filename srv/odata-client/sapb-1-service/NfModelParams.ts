/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * NfModelParams
 */
export interface NfModelParams {
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: string;
  /**
   * Nfm Name.
   * @nullable
   */
  nfmName?: string;
  /**
   * Nfm Description.
   * @nullable
   */
  nfmDescription?: string;
  /**
   * Nfm Code.
   * @nullable
   */
  nfmCode?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[NfModelParams.build]] instead.
 */
export function createNfModelParams(json: any): NfModelParams {
  return NfModelParams.build(json);
}

/**
 * NfModelParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class NfModelParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, NfModelParams> {
  /**
   * Representation of the [[NfModelParams.absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absEntry: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AbsEntry', this, 'Edm.String');
  /**
   * Representation of the [[NfModelParams.nfmName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  nfmName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('NFMName', this, 'Edm.String');
  /**
   * Representation of the [[NfModelParams.nfmDescription]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  nfmDescription: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('NFMDescription', this, 'Edm.String');
  /**
   * Representation of the [[NfModelParams.nfmCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  nfmCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('NFMCode', this, 'Edm.String');

  /**
   * Creates an instance of NfModelParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, NfModelParams);
  }
}

export namespace NfModelParams {
  /**
   * Metadata information on all properties of the `NfModelParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<NfModelParams>[] = [{
    originalName: 'AbsEntry',
    name: 'absEntry',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'NFMName',
    name: 'nfmName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'NFMDescription',
    name: 'nfmDescription',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'NFMCode',
    name: 'nfmCode',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): NfModelParams {
    return deserializeComplexTypeV4(json, NfModelParams);
  }
}
