/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * MaterialRevaluationFifoParams
 */
export interface MaterialRevaluationFifoParams {
  /**
   * Item Code.
   * @nullable
   */
  itemCode?: string;
  /**
   * Location Type.
   * @nullable
   */
  locationType?: string;
  /**
   * Location Code.
   * @nullable
   */
  locationCode?: string;
  /**
   * Show Issued Layers.
   * @nullable
   */
  showIssuedLayers?: BoYesNoEnum;
}

/**
 * @deprecated Since v1.6.0. Use [[MaterialRevaluationFifoParams.build]] instead.
 */
export function createMaterialRevaluationFifoParams(json: any): MaterialRevaluationFifoParams {
  return MaterialRevaluationFifoParams.build(json);
}

/**
 * MaterialRevaluationFifoParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class MaterialRevaluationFifoParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, MaterialRevaluationFifoParams> {
  /**
   * Representation of the [[MaterialRevaluationFifoParams.itemCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemCode', this, 'Edm.String');
  /**
   * Representation of the [[MaterialRevaluationFifoParams.locationType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  locationType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('LocationType', this, 'Edm.String');
  /**
   * Representation of the [[MaterialRevaluationFifoParams.locationCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  locationCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('LocationCode', this, 'Edm.String');
  /**
   * Representation of the [[MaterialRevaluationFifoParams.showIssuedLayers]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  showIssuedLayers: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('ShowIssuedLayers', this);

  /**
   * Creates an instance of MaterialRevaluationFifoParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, MaterialRevaluationFifoParams);
  }
}

export namespace MaterialRevaluationFifoParams {
  /**
   * Metadata information on all properties of the `MaterialRevaluationFifoParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<MaterialRevaluationFifoParams>[] = [{
    originalName: 'ItemCode',
    name: 'itemCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'LocationType',
    name: 'locationType',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'LocationCode',
    name: 'locationCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ShowIssuedLayers',
    name: 'showIssuedLayers',
    type: 'Edm.Enum',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): MaterialRevaluationFifoParams {
    return deserializeComplexTypeV4(json, MaterialRevaluationFifoParams);
  }
}
