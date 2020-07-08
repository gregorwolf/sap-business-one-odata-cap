/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class ReportTypeParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace ReportTypeParams {
  export function build(json: { [keys: string]: FieldType }): ReportTypeParams {
    return createComplexType(json, {
      TypeCode: (typeCode: string) => ({ typeCode: edmToTs(typeCode, 'Edm.String') }),
      TypeName: (typeName: string) => ({ typeName: edmToTs(typeName, 'Edm.String') }),
      AddonName: (addonName: string) => ({ addonName: edmToTs(addonName, 'Edm.String') }),
      AddonFormType: (addonFormType: string) => ({ addonFormType: edmToTs(addonFormType, 'Edm.String') }),
      MenuID: (menuId: string) => ({ menuId: edmToTs(menuId, 'Edm.String') })
    });
  }
}
