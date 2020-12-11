/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoCockpitTypeEnum } from './BoCockpitTypeEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * CockpitParams
 */
export interface CockpitParams {
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: number;
  /**
   * Cockpit Type.
   * @nullable
   */
  cockpitType?: BoCockpitTypeEnum;
}

/**
 * @deprecated Since v1.6.0. Use [[CockpitParams.build]] instead.
 */
export function createCockpitParams(json: any): CockpitParams {
  return CockpitParams.build(json);
}

/**
 * CockpitParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class CockpitParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, CockpitParams> {
  /**
   * Representation of the [[CockpitParams.absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[CockpitParams.cockpitType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cockpitType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('CockpitType', this);

  /**
   * Creates an instance of CockpitParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, CockpitParams);
  }
}

export namespace CockpitParams {
  /**
   * Metadata information on all properties of the `CockpitParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<CockpitParams>[] = [{
    originalName: 'AbsEntry',
    name: 'absEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'CockpitType',
    name: 'cockpitType',
    type: 'Edm.Enum',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): CockpitParams {
    return deserializeComplexTypeV4(json, CockpitParams);
  }
}
