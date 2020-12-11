/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ReportLayoutCategoryEnum } from './ReportLayoutCategoryEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ReportLayoutParams
 */
export interface ReportLayoutParams {
  /**
   * Layout Code.
   * @nullable
   */
  layoutCode?: string;
  /**
   * Layout Name.
   * @nullable
   */
  layoutName?: string;
  /**
   * Category.
   * @nullable
   */
  category?: ReportLayoutCategoryEnum;
}

/**
 * @deprecated Since v1.6.0. Use [[ReportLayoutParams.build]] instead.
 */
export function createReportLayoutParams(json: any): ReportLayoutParams {
  return ReportLayoutParams.build(json);
}

/**
 * ReportLayoutParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ReportLayoutParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ReportLayoutParams> {
  /**
   * Representation of the [[ReportLayoutParams.layoutCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  layoutCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('LayoutCode', this, 'Edm.String');
  /**
   * Representation of the [[ReportLayoutParams.layoutName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  layoutName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('LayoutName', this, 'Edm.String');
  /**
   * Representation of the [[ReportLayoutParams.category]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  category: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Category', this);

  /**
   * Creates an instance of ReportLayoutParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ReportLayoutParams);
  }
}

export namespace ReportLayoutParams {
  /**
   * Metadata information on all properties of the `ReportLayoutParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ReportLayoutParams>[] = [{
    originalName: 'LayoutCode',
    name: 'layoutCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'LayoutName',
    name: 'layoutName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Category',
    name: 'category',
    type: 'Edm.Enum',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ReportLayoutParams {
    return deserializeComplexTypeV4(json, ReportLayoutParams);
  }
}
