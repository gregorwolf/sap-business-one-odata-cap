/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ItemPeriodControl
 */
export interface ItemPeriodControl {
  /**
   * Fiscal Year.
   * @nullable
   */
  fiscalYear?: string;
  /**
   * Depreciation Area.
   * @nullable
   */
  depreciationArea?: string;
  /**
   * Sub Period.
   * @nullable
   */
  subPeriod?: number;
  /**
   * Depreciation Status.
   * @nullable
   */
  depreciationStatus?: BoYesNoEnum;
  /**
   * Factor.
   * @nullable
   */
  factor?: number;
  /**
   * Actual Units.
   * @nullable
   */
  actualUnits?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[ItemPeriodControl.build]] instead.
 */
export function createItemPeriodControl(json: any): ItemPeriodControl {
  return ItemPeriodControl.build(json);
}

/**
 * ItemPeriodControlField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ItemPeriodControlField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ItemPeriodControl> {
  /**
   * Representation of the [[ItemPeriodControl.fiscalYear]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fiscalYear: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FiscalYear', this, 'Edm.String');
  /**
   * Representation of the [[ItemPeriodControl.depreciationArea]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  depreciationArea: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DepreciationArea', this, 'Edm.String');
  /**
   * Representation of the [[ItemPeriodControl.subPeriod]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  subPeriod: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SubPeriod', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemPeriodControl.depreciationStatus]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  depreciationStatus: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('DepreciationStatus', this);
  /**
   * Representation of the [[ItemPeriodControl.factor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  factor: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Factor', this, 'Edm.Double');
  /**
   * Representation of the [[ItemPeriodControl.actualUnits]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  actualUnits: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ActualUnits', this, 'Edm.Int32');

  /**
   * Creates an instance of ItemPeriodControlField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ItemPeriodControl);
  }
}

export namespace ItemPeriodControl {
  /**
   * Metadata information on all properties of the `ItemPeriodControl` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ItemPeriodControl>[] = [{
    originalName: 'FiscalYear',
    name: 'fiscalYear',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DepreciationArea',
    name: 'depreciationArea',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'SubPeriod',
    name: 'subPeriod',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'DepreciationStatus',
    name: 'depreciationStatus',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'Factor',
    name: 'factor',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'ActualUnits',
    name: 'actualUnits',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ItemPeriodControl {
    return deserializeComplexTypeV4(json, ItemPeriodControl);
  }
}
