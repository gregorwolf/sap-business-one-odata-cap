import { Moment } from 'moment';
import { ContactEmployeeBlockSendingMarketingContent, ContactEmployeeBlockSendingMarketingContentField } from './ContactEmployeeBlockSendingMarketingContent';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ContactEmployee
 */
export interface ContactEmployee {
    /**
     * Card Code.
     * @nullable
     */
    cardCode?: string;
    /**
     * Name.
     * @nullable
     */
    name?: string;
    /**
     * Position.
     * @nullable
     */
    position?: string;
    /**
     * Address.
     * @nullable
     */
    address?: string;
    /**
     * Phone 1.
     * @nullable
     */
    phone1?: string;
    /**
     * Phone 2.
     * @nullable
     */
    phone2?: string;
    /**
     * Mobile Phone.
     * @nullable
     */
    mobilePhone?: string;
    /**
     * Fax.
     * @nullable
     */
    fax?: string;
    /**
     * E Mail.
     * @nullable
     */
    eMail?: string;
    /**
     * Pager.
     * @nullable
     */
    pager?: string;
    /**
     * Remarks 1.
     * @nullable
     */
    remarks1?: string;
    /**
     * Remarks 2.
     * @nullable
     */
    remarks2?: string;
    /**
     * Password.
     * @nullable
     */
    password?: string;
    /**
     * Internal Code.
     * @nullable
     */
    internalCode?: number;
    /**
     * Place Of Birth.
     * @nullable
     */
    placeOfBirth?: string;
    /**
     * Date Of Birth.
     * @nullable
     */
    dateOfBirth?: Moment;
    /**
     * Profession.
     * @nullable
     */
    profession?: string;
    /**
     * Title.
     * @nullable
     */
    title?: string;
    /**
     * City Of Birth.
     * @nullable
     */
    cityOfBirth?: string;
    /**
     * First Name.
     * @nullable
     */
    firstName?: string;
    /**
     * Middle Name.
     * @nullable
     */
    middleName?: string;
    /**
     * Last Name.
     * @nullable
     */
    lastName?: string;
    /**
     * Email Group Code.
     * @nullable
     */
    emailGroupCode?: string;
    /**
     * Contact Employee Block Sending Marketing Contents.
     * @nullable
     */
    contactEmployeeBlockSendingMarketingContents?: ContactEmployeeBlockSendingMarketingContent;
}
/**
 * @deprecated Since v1.6.0. Use [[ContactEmployee.build]] instead.
 */
export declare function createContactEmployee(json: any): ContactEmployee;
/**
 * ContactEmployeeField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ContactEmployeeField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ContactEmployee.cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cardCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ContactEmployee.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ContactEmployee.position]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    position: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ContactEmployee.address]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    address: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ContactEmployee.phone1]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    phone1: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ContactEmployee.phone2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    phone2: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ContactEmployee.mobilePhone]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    mobilePhone: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ContactEmployee.fax]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fax: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ContactEmployee.eMail]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    eMail: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ContactEmployee.pager]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    pager: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ContactEmployee.remarks1]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    remarks1: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ContactEmployee.remarks2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    remarks2: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ContactEmployee.password]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    password: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ContactEmployee.internalCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    internalCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ContactEmployee.placeOfBirth]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    placeOfBirth: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ContactEmployee.dateOfBirth]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dateOfBirth: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[ContactEmployee.profession]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    profession: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ContactEmployee.title]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    title: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ContactEmployee.cityOfBirth]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cityOfBirth: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ContactEmployee.firstName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    firstName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ContactEmployee.middleName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    middleName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ContactEmployee.lastName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lastName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ContactEmployee.emailGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    emailGroupCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ContactEmployee.contactEmployeeBlockSendingMarketingContents]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    contactEmployeeBlockSendingMarketingContents: ContactEmployeeBlockSendingMarketingContentField<EntityT>;
}
export declare namespace ContactEmployee {
    function build(json: {
        [keys: string]: FieldType | ContactEmployeeBlockSendingMarketingContent;
    }): ContactEmployee;
}
//# sourceMappingURL=ContactEmployee.d.ts.map