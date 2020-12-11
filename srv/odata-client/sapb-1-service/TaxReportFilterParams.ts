/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TaxReportFilterType } from './TaxReportFilterType';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * TaxReportFilterParams
 */
export interface TaxReportFilterParams {
  /**
   * Code.
   * @nullable
   */
  code?: number;
  /**
   * Name.
   * @nullable
   */
  name?: string;
  /**
   * Filter Type.
   * @nullable
   */
  filterType?: TaxReportFilterType;
}

/**
 * @deprecated Since v1.6.0. Use [[TaxReportFilterParams.build]] instead.
 */
export function createTaxReportFilterParams(json: any): TaxReportFilterParams {
  return TaxReportFilterParams.build(json);
}

/**
 * TaxReportFilterParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class TaxReportFilterParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TaxReportFilterParams> {
  /**
   * Representation of the [[TaxReportFilterParams.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Code', this, 'Edm.Int32');
  /**
   * Representation of the [[TaxReportFilterParams.name]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Name', this, 'Edm.String');
  /**
   * Representation of the [[TaxReportFilterParams.filterType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  filterType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('FilterType', this);

  /**
   * Creates an instance of TaxReportFilterParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, TaxReportFilterParams);
  }
}

export namespace TaxReportFilterParams {
  /**
   * Metadata information on all properties of the `TaxReportFilterParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<TaxReportFilterParams>[] = [{
    originalName: 'Code',
    name: 'code',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Name',
    name: 'name',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'FilterType',
    name: 'filterType',
    type: 'Edm.Enum',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): TaxReportFilterParams {
    return deserializeComplexTypeV4(json, TaxReportFilterParams);
  }
}
