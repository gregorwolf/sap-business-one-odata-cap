/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * VmThirdPartyValuesData
 */
export interface VmThirdPartyValuesData {
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: number;
  /**
   * Line Id.
   * @nullable
   */
  lineId?: number;
  /**
   * Third Party System Id.
   * @nullable
   */
  thirdPartySystemId?: number;
  /**
   * Third Party Value.
   * @nullable
   */
  thirdPartyValue?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[VmThirdPartyValuesData.build]] instead.
 */
export function createVmThirdPartyValuesData(json: any): VmThirdPartyValuesData {
  return VmThirdPartyValuesData.build(json);
}

/**
 * VmThirdPartyValuesDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class VmThirdPartyValuesDataField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, VmThirdPartyValuesData> {
  /**
   * Representation of the [[VmThirdPartyValuesData.absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[VmThirdPartyValuesData.lineId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineId', this, 'Edm.Int32');
  /**
   * Representation of the [[VmThirdPartyValuesData.thirdPartySystemId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  thirdPartySystemId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ThirdPartySystemId', this, 'Edm.Int32');
  /**
   * Representation of the [[VmThirdPartyValuesData.thirdPartyValue]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  thirdPartyValue: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ThirdPartyValue', this, 'Edm.String');

  /**
   * Creates an instance of VmThirdPartyValuesDataField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, VmThirdPartyValuesData);
  }
}

export namespace VmThirdPartyValuesData {
  /**
   * Metadata information on all properties of the `VmThirdPartyValuesData` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<VmThirdPartyValuesData>[] = [{
    originalName: 'AbsEntry',
    name: 'absEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'LineId',
    name: 'lineId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ThirdPartySystemId',
    name: 'thirdPartySystemId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ThirdPartyValue',
    name: 'thirdPartyValue',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): VmThirdPartyValuesData {
    return deserializeComplexTypeV4(json, VmThirdPartyValuesData);
  }
}
