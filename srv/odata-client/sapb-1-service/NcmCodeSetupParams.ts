/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * NcmCodeSetupParams
 */
export interface NcmCodeSetupParams {
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: number;
  /**
   * Ncm Code.
   * @nullable
   */
  ncmCode?: string;
  /**
   * Description.
   * @nullable
   */
  description?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[NcmCodeSetupParams.build]] instead.
 */
export function createNcmCodeSetupParams(json: any): NcmCodeSetupParams {
  return NcmCodeSetupParams.build(json);
}

/**
 * NcmCodeSetupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class NcmCodeSetupParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, NcmCodeSetupParams> {
  /**
   * Representation of the [[NcmCodeSetupParams.absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[NcmCodeSetupParams.ncmCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ncmCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('NCMCode', this, 'Edm.String');
  /**
   * Representation of the [[NcmCodeSetupParams.description]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  description: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Description', this, 'Edm.String');

  /**
   * Creates an instance of NcmCodeSetupParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, NcmCodeSetupParams);
  }
}

export namespace NcmCodeSetupParams {
  /**
   * Metadata information on all properties of the `NcmCodeSetupParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<NcmCodeSetupParams>[] = [{
    originalName: 'AbsEntry',
    name: 'absEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'NCMCode',
    name: 'ncmCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Description',
    name: 'description',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): NcmCodeSetupParams {
    return deserializeComplexTypeV4(json, NcmCodeSetupParams);
  }
}
