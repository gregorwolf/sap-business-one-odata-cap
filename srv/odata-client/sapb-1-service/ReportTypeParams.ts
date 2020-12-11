/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ReportTypeParams
 */
export interface ReportTypeParams {
  /**
   * Type Code.
   * @nullable
   */
  typeCode?: string;
  /**
   * Type Name.
   * @nullable
   */
  typeName?: string;
  /**
   * Addon Name.
   * @nullable
   */
  addonName?: string;
  /**
   * Addon Form Type.
   * @nullable
   */
  addonFormType?: string;
  /**
   * Menu Id.
   * @nullable
   */
  menuId?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[ReportTypeParams.build]] instead.
 */
export function createReportTypeParams(json: any): ReportTypeParams {
  return ReportTypeParams.build(json);
}

/**
 * ReportTypeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ReportTypeParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ReportTypeParams> {
  /**
   * Representation of the [[ReportTypeParams.typeCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  typeCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TypeCode', this, 'Edm.String');
  /**
   * Representation of the [[ReportTypeParams.typeName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  typeName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TypeName', this, 'Edm.String');
  /**
   * Representation of the [[ReportTypeParams.addonName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  addonName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AddonName', this, 'Edm.String');
  /**
   * Representation of the [[ReportTypeParams.addonFormType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  addonFormType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AddonFormType', this, 'Edm.String');
  /**
   * Representation of the [[ReportTypeParams.menuId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  menuId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('MenuID', this, 'Edm.String');

  /**
   * Creates an instance of ReportTypeParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ReportTypeParams);
  }
}

export namespace ReportTypeParams {
  /**
   * Metadata information on all properties of the `ReportTypeParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ReportTypeParams>[] = [{
    originalName: 'TypeCode',
    name: 'typeCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TypeName',
    name: 'typeName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'AddonName',
    name: 'addonName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'AddonFormType',
    name: 'addonFormType',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'MenuID',
    name: 'menuId',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ReportTypeParams {
    return deserializeComplexTypeV4(json, ReportTypeParams);
  }
}
