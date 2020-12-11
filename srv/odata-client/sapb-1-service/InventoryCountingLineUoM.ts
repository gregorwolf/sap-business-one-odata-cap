/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CounterTypeEnum } from './CounterTypeEnum';
import { MultipleCounterRoleEnum } from './MultipleCounterRoleEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * InventoryCountingLineUoM
 */
export interface InventoryCountingLineUoM {
  /**
   * Document Entry.
   * @nullable
   */
  documentEntry?: number;
  /**
   * Line Number.
   * @nullable
   */
  lineNumber?: number;
  /**
   * Child Number.
   * @nullable
   */
  childNumber?: number;
  /**
   * Uo M Counted Quantity.
   * @nullable
   */
  uoMCountedQuantity?: number;
  /**
   * Items Per Unit.
   * @nullable
   */
  itemsPerUnit?: number;
  /**
   * Counted Quantity.
   * @nullable
   */
  countedQuantity?: number;
  /**
   * Uo M Code.
   * @nullable
   */
  uoMCode?: string;
  /**
   * Bar Code.
   * @nullable
   */
  barCode?: string;
  /**
   * Counter Type.
   * @nullable
   */
  counterType?: CounterTypeEnum;
  /**
   * Counter Id.
   * @nullable
   */
  counterId?: number;
  /**
   * Multiple Counter Role.
   * @nullable
   */
  multipleCounterRole?: MultipleCounterRoleEnum;
}

/**
 * @deprecated Since v1.6.0. Use [[InventoryCountingLineUoM.build]] instead.
 */
export function createInventoryCountingLineUoM(json: any): InventoryCountingLineUoM {
  return InventoryCountingLineUoM.build(json);
}

/**
 * InventoryCountingLineUoMField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class InventoryCountingLineUoMField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, InventoryCountingLineUoM> {
  /**
   * Representation of the [[InventoryCountingLineUoM.documentEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocumentEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[InventoryCountingLineUoM.lineNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[InventoryCountingLineUoM.childNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  childNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ChildNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[InventoryCountingLineUoM.uoMCountedQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uoMCountedQuantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('UoMCountedQuantity', this, 'Edm.Double');
  /**
   * Representation of the [[InventoryCountingLineUoM.itemsPerUnit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemsPerUnit: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ItemsPerUnit', this, 'Edm.Double');
  /**
   * Representation of the [[InventoryCountingLineUoM.countedQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  countedQuantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CountedQuantity', this, 'Edm.Double');
  /**
   * Representation of the [[InventoryCountingLineUoM.uoMCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uoMCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('UoMCode', this, 'Edm.String');
  /**
   * Representation of the [[InventoryCountingLineUoM.barCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  barCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BarCode', this, 'Edm.String');
  /**
   * Representation of the [[InventoryCountingLineUoM.counterType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  counterType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('CounterType', this);
  /**
   * Representation of the [[InventoryCountingLineUoM.counterId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  counterId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CounterID', this, 'Edm.Int32');
  /**
   * Representation of the [[InventoryCountingLineUoM.multipleCounterRole]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  multipleCounterRole: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('MultipleCounterRole', this);

  /**
   * Creates an instance of InventoryCountingLineUoMField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, InventoryCountingLineUoM);
  }
}

export namespace InventoryCountingLineUoM {
  /**
   * Metadata information on all properties of the `InventoryCountingLineUoM` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<InventoryCountingLineUoM>[] = [{
    originalName: 'DocumentEntry',
    name: 'documentEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'LineNumber',
    name: 'lineNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ChildNumber',
    name: 'childNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'UoMCountedQuantity',
    name: 'uoMCountedQuantity',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'ItemsPerUnit',
    name: 'itemsPerUnit',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'CountedQuantity',
    name: 'countedQuantity',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'UoMCode',
    name: 'uoMCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BarCode',
    name: 'barCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CounterType',
    name: 'counterType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'CounterID',
    name: 'counterId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'MultipleCounterRole',
    name: 'multipleCounterRole',
    type: 'Edm.Enum',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): InventoryCountingLineUoM {
    return deserializeComplexTypeV4(json, InventoryCountingLineUoM);
  }
}
