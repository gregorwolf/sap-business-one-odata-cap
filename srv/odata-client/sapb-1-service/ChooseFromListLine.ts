/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoYesNoEnum } from './BoYesNoEnum';
import { SortOrderEnum } from './SortOrderEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ChooseFromListLine
 */
export interface ChooseFromListLine {
  /**
   * Field No.
   * @nullable
   */
  fieldNo?: string;
  /**
   * Displayed Name.
   * @nullable
   */
  displayedName?: string;
  /**
   * Group By.
   * @nullable
   */
  groupBy?: BoYesNoEnum;
  /**
   * Visible.
   * @nullable
   */
  visible?: BoYesNoEnum;
  /**
   * Show Type.
   * @nullable
   */
  showType?: BoYesNoEnum;
  /**
   * Sort Order.
   * @nullable
   */
  sortOrder?: SortOrderEnum;
  /**
   * Visual Index.
   * @nullable
   */
  visualIndex?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[ChooseFromListLine.build]] instead.
 */
export function createChooseFromListLine(json: any): ChooseFromListLine {
  return ChooseFromListLine.build(json);
}

/**
 * ChooseFromListLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ChooseFromListLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ChooseFromListLine> {
  /**
   * Representation of the [[ChooseFromListLine.fieldNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fieldNo: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FieldNo', this, 'Edm.String');
  /**
   * Representation of the [[ChooseFromListLine.displayedName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  displayedName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DisplayedName', this, 'Edm.String');
  /**
   * Representation of the [[ChooseFromListLine.groupBy]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  groupBy: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('GroupBy', this);
  /**
   * Representation of the [[ChooseFromListLine.visible]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  visible: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Visible', this);
  /**
   * Representation of the [[ChooseFromListLine.showType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  showType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('ShowType', this);
  /**
   * Representation of the [[ChooseFromListLine.sortOrder]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sortOrder: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('SortOrder', this);
  /**
   * Representation of the [[ChooseFromListLine.visualIndex]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  visualIndex: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('VisualIndex', this, 'Edm.Int32');

  /**
   * Creates an instance of ChooseFromListLineField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ChooseFromListLine);
  }
}

export namespace ChooseFromListLine {
  /**
   * Metadata information on all properties of the `ChooseFromListLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ChooseFromListLine>[] = [{
    originalName: 'FieldNo',
    name: 'fieldNo',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'DisplayedName',
    name: 'displayedName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'GroupBy',
    name: 'groupBy',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'Visible',
    name: 'visible',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'ShowType',
    name: 'showType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'SortOrder',
    name: 'sortOrder',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'VisualIndex',
    name: 'visualIndex',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ChooseFromListLine {
    return deserializeComplexTypeV4(json, ChooseFromListLine);
  }
}
